
const idCase = 2;
const targetTechnologies = [9, 3, 2, 1, 6, 5, 11, 12];
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ3BzY3N3amhvZXp0ZXp0enFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDA5MDgsImV4cCI6MTk3MTMxNjkwOH0.CngBZIcbSah64A92Vkf41tc_EyYCBFtW0jpBBWAUVwU';
const url = `https://gegpscswjhoezteztzqk.supabase.co/rest/v1/CaseStudyDetail?idCase=eq.${idCase}`;

fetch(url, {
    method: 'PATCH',
    headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    },
    body: JSON.stringify({
        idTechnologies: targetTechnologies
    })
})
    .then(res => res.json())
    .then(data => {
        console.log('Update Result:');
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(err => console.error(err));
