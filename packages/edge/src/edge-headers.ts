/**
 * City of the original client IP as calculated by Vercel Proxy.
 */
export const CITY_HEADER_NAME = 'x-vercel-ip-city';
/**
 * Country of the original client IP as calculated by Vercel Proxy.
 */
export const COUNTRY_HEADER_NAME = 'x-vercel-ip-country';
/**
 * Client IP as calculated by Vercel Proxy.
 */
export const IP_HEADER_NAME = 'x-real-ip';
/**
 * Latitude of the original client IP as calculated by Vercel Proxy.
 */
export const LATITUDE_HEADER_NAME = 'x-vercel-ip-latitude';
/**
 * Longitude of the original client IP as calculated by Vercel Proxy.
 */
export const LONGITUDE_HEADER_NAME = 'x-vercel-ip-longitude';
/**
 * Country region of the original client IP calculated by Vercel Proxy.
 *
 * See [docs](https://vercel.com/docs/concepts/edge-network/headers#x-vercel-ip-country-region).
 */
export const REGION_HEADER_NAME = 'x-vercel-ip-country-region';
/**
 * Postal code of the original client IP calculated by Vercel Proxy.
 */
export const POSTAL_CODE_HEADER_NAME = 'x-vercel-ip-postal-code';
/**
 * The request ID for each request generated by Vercel Proxy.
 */
export const REQUEST_ID_HEADER_NAME = 'x-vercel-id';
/**
 * Unicode characters for emoji flags start at this number, and run up to 127469.
 */
export const EMOJI_FLAG_UNICODE_STARTING_POSITION = 127397;

/**
 * The location information of a given request.
 */
export interface Geo {
  /** The city that the request originated from. */
  city?: string;

  /** The country that the request originated from. */
  country?: string;

  /** The flag emoji for the country the request originated from. */
  flag?: string;

  /** The [Vercel Edge Network region](https://vercel.com/docs/concepts/edge-network/regions) that received the request. */
  region?: string;

  /** The region part of the ISO 3166-2 code of the client IP.
   * See [docs](https://vercel.com/docs/concepts/edge-network/headers#x-vercel-ip-country-region).
   */
  countryRegion?: string;

  /** The latitude of the client. */
  latitude?: string;

  /** The longitude of the client. */
  longitude?: string;

  /** The postal code of the client. */
  postalCode?: string;
}

/**
 * @deprecated use `const { ipAddress } from '@vercel/functions'` instead.
 *
 * Throws an error indicating that the `ipAddress` function should be imported
 * from '@vercel/functions' instead of using this function.
 *
 * @throws {Error} Always throws an error with a message to use the alternative import.
 */
export function ipAddress() {
  throw new Error(
    "use `const { ipAddress } from '@vercel/functions'` instead."
  );
}

/**
 * @deprecated Use `const { geolocation } from '@vercel/functions'` instead.
 *
 * Throws an error indicating that the `geolocation` function should be imported
 * from '@vercel/functions' instead.
 *
 * @throws {Error} Always throws an error with a message to use the new import path.
 */
export function geolocation() {
  throw new Error(
    "use `const { geolocation } from '@vercel/functions'` instead."
  );
}
