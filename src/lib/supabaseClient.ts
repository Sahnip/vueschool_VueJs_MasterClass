import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://rorvijjbusaizgahbzkb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvcnZpampidXNhaXpnYWhiemtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MzI2MjcsImV4cCI6MjA1NjUwODYyN30.ls8LRHHT6qu3AjrAMyYqa4Qryb7otJ4y-yh81DF72i8')


export default supabase;
