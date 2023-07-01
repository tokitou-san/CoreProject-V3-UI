import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    let json_data: null | {
        default: {};
    };
    try {
        json_data = await import(`../../../server/anime/${params.id}.json`);
    } catch (e) {
        json_data = null;
    }

    return {
        data: json_data?.default
    };
}) satisfies PageLoad;
