import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'viyp67v2',
  dataset: 'production',
  apiVersion: '2023-05-07',
  useCdn: true,
  token: import.meta.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
