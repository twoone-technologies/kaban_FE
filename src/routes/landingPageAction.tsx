import { ActionFunctionArgs, redirect } from 'react-router-dom';

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const searchStr = [...formData]
        .reduce((prev, [key, val]) => {
            if (val) prev.push(`${key}=${val}`);
            return prev;
        }, [] as string[])
        .join('&');

    if (location.pathname !== '/search_results') {
        return redirect(`/search_results?${searchStr}`);
    }
    return redirect(`/search_results?${searchStr}`);
}