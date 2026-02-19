
const urls = [
    'https://gegpscswjhoezteztzqk.supabase.co/rest/v1/CaseStudyDetail?idCase=eq.2&select=idCase,idTechnologies',
    'https://gegpscswjhoezteztzqk.supabase.co/rest/v1/CaseStudyDetail?idCase=eq.3&select=idCase,idTechnologies'
];
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ3BzY3N3amhvZXp0ZXp0enFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDA5MDgsImV4cCI6MTk3MTMxNjkwOH0.CngBZIcbSah64A92Vkf41tc_EyYCBFtW0jpBBWAUVwU';

Promise.all(urls.map(url =>
    fetch(url, {
        headers: {
            'apikey': key,
            'Authorization': `Bearer ${key}`
        }
    }).then(res => res.json())
))
    .then(results => {
        console.log('Case Study Details:');
        console.log(JSON.stringify(results, null, 2));
    })
    .catch(err => console.error(err));
