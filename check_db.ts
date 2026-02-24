
import { supabase } from './src/lib/supabase';

async function checkColumns() {
    const { data, error } = await supabase
        .from('Location')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Columns:', Object.keys(data[0] || {}));
        console.log('Sample Data:', data[0]);
    }
}

checkColumns();
