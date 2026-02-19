
const url = 'https://gegpscswjhoezteztzqk.supabase.co/rest/v1/Technology?select=id,name';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ3BzY3N3amhvZXp0ZXp0enFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDA5MDgsImV4cCI6MTk3MTMxNjkwOH0.CngBZIcbSah64A92Vkf41tc_EyYCBFtW0jpBBWAUVwU';

fetch(url, {
    headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`
    }
})
    .then(res => res.json())
    .then(data => {
        console.log('Available Technologies:');
        data.forEach(t => console.log(`${t.id}: ${t.name}`));
    })
    .catch(err => console.error(err));
