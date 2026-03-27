module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || '',
    defaultHouseholdId: process.env.NEXT_PUBLIC_DEFAULT_HOUSEHOLD_ID || process.env.DEFAULT_HOUSEHOLD_ID || 'casa-demo'
  });
};
