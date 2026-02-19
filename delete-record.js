
const id = 5;
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ3BzY3N3amhvZXp0ZXp0enFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDA5MDgsImV4cCI6MTk3MTMxNjkwOH0.CngBZIcbSah64A92Vkf41tc_EyYCBFtW0jpBBWAUVwU';
const url = `https://gegpscswjhoezteztzqk.supabase.co/rest/v1/CaseStudyDetail?id=eq.${id}`;

fetch(url, {
    method: 'DELETE',
    headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`
    }
})
    .then(res => {
        if (res.ok) {
            console.log(`Record ${id} deleted successfully.`);
        } else {
            console.error(`Failed to delete record ${id}. Status: ${res.status}`);
        }
    })
    .catch(err => console.error(err));
