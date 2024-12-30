import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "bdy96jr9",
    dataset: "production",
    apiVersion: '2024-12-25',
    useCdn: true,
});


const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source:any){
    return builder.image(source);
}