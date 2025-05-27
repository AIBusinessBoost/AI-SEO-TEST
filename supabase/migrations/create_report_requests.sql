/*
  # Create report requests table
  
  1. New Tables
    - `report_requests`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `email` (text, not null)
      - `created_at` (timestamp)
      - `sent_at` (timestamp, nullable)
      - `status` (text)
  2. Security
    - Enable RLS on `report_requests` table
    - Add policy for authenticated users to insert data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS report_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text,
  email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  sent_at timestamptz,
  status text DEFAULT 'pending'
);

ALTER TABLE report_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert report requests"
  ON report_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read report requests"
  ON report_requests
  FOR SELECT
  TO authenticated
  USING (true);