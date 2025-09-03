import {
  withRemoteComponents,
  config,
} from 'remote-components/next/middleware';
import { NextRequest, NextResponse } from 'next/server';

const remoteComponentsMiddleware = withRemoteComponents();

export async function middleware(request: NextRequest) {
  // Call the remote components middleware first
  const response = await remoteComponentsMiddleware(request);
  
  // Add additional CORS headers for remote component requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, vercel-remote-component-url',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  
  // Add CORS headers to actual responses
  if (response) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, vercel-remote-component-url');
  }
  
  return response;
}

export { config };