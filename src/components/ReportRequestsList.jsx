import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import '../styles/ReportRequestsList.css';

export default function ReportRequestsList() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReportRequests() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('report_requests')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        setRequests(data || []);
      } catch (err) {
        console.error('Error fetching report requests:', err);
        setError('Failed to load report requests');
      } finally {
        setLoading(false);
      }
    }
    
    fetchReportRequests();
    
    // Set up real-time subscription
    const subscription = supabase
      .channel('report_requests_changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'report_requests' 
      }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setRequests(prev => [payload.new, ...prev]);
        } else if (payload.eventType === 'UPDATE') {
          setRequests(prev => 
            prev.map(request => 
              request.id === payload.new.id ? payload.new : request
            )
          );
        } else if (payload.eventType === 'DELETE') {
          setRequests(prev => 
            prev.filter(request => request.id !== payload.old.id)
          );
        }
      })
      .subscribe();
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleMarkAsSent = async (id) => {
    try {
      const { error } = await supabase
        .from('report_requests')
        .update({ status: 'sent', sent_at: new Date().toISOString() })
        .eq('id', id);
      
      if (error) throw error;
      
      // Update will be handled by the real-time subscription
    } catch (err) {
      console.error('Error updating report request:', err);
      alert('Failed to update request status');
    }
  };

  if (loading) {
    return <div className="report-requests-loading">Loading report requests...</div>;
  }

  if (error) {
    return <div className="report-requests-error">{error}</div>;
  }

  return (
    <div className="report-requests-container">
      <h2>Report Requests</h2>
      
      {requests.length === 0 ? (
        <p className="no-requests">No report requests found.</p>
      ) : (
        <div className="requests-list">
          {requests.map(request => (
            <div key={request.id} className={`request-item ${request.status}`}>
              <div className="request-info">
                <h3>{request.first_name || 'Anonymous'}</h3>
                <p className="email">{request.email}</p>
                <p className="date">
                  Requested: {new Date(request.created_at).toLocaleString()}
                </p>
                {request.sent_at && (
                  <p className="date">
                    Sent: {new Date(request.sent_at).toLocaleString()}
                  </p>
                )}
                <span className={`status-badge ${request.status}`}>
                  {request.status}
                </span>
              </div>
              
              {request.status === 'pending' && (
                <button 
                  className="mark-sent-button"
                  onClick={() => handleMarkAsSent(request.id)}
                >
                  Mark as Sent
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
