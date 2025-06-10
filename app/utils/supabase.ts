import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto"; // Good to have this at the top


const supabaseUrl = "https://eidzputxcsndyjstxscd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZHpwdXR4Y3NuZHlqc3R4c2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MjU2MDcsImV4cCI6MjA2NDEwMTYwN30.RvrKzLHsRM3re0-UjDwFK2Zi0W5SZMK84e3nSmXkEj0";
  

if (!supabaseUrl) {
  console.error(
    "Supabase URL is not defined. Please check your environment variables."
  );

}

if (!supabaseAnonKey) {
  console.error(
    "Supabase Anon Key is not defined. Please check your environment variables."
  );

}

export const supabase = createClient(
  supabaseUrl, 
  supabaseAnonKey, 

);