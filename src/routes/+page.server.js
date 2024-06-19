import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		if (!/^\S+@\S+\.\S+$/.test(email)) {
			return fail(400, { success: false, message: 'invalid email.' });
		}

		const response = await supabase.from('email_list').insert([{ email }]);

		if (!response.error) return { success: true, message: 'added to email list.' };
		return fail(500, { message: response.error, success: false });
	}
};
