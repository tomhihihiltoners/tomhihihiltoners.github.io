/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ============================================================================
 * ACCIDENTAL IMMORTALITY: RICKROLLING — CENTRALIZED MEDIA CONFIGURATION
 * ============================================================================
 *
 * To change any image, animated GIF, or embedded Google Drive video across the
 * longread, edit the URLs below. Components automatically inherit from this
 * configuration file.
 *
 * REQUIREMENTS:
 * 1. Images & GIFs: Direct URLs to image/gif files (HTTPS).
 * 2. Videos: Google Drive embed URLs using the /preview endpoint:
 *    Format: "https://drive.google.com/file/d/FILE_ID/preview"
 *
 * GOOGLE DRIVE NOTE:
 * Ensure the Google Drive video file has its sharing permissions set to
 * "Anyone with the link can view". The /preview URL embeds Google Drive's
 * video player directly in an iframe.
 * ============================================================================
 */

export interface MediaSectionConfig {
  [key: string]: string;
}

export interface AppMediaConfig {
  hero: {
    heroImage: string;
    videoEmbed: string;
    vhsTexture: string;
    astleyPortrait: string;
  };
  beforeTheInternet: {
    singleCover: string;
    studioSession: string;
    peterWatermanArchive: string;
    trenchCoatStill: string;
  };
  howRickrollingHappened: {
    duckrollGif: string;
    rickrollDanceGif: string;
    gtaTrailerLeakMockup: string;
    youtubeAprilFools2008: string;
    rickrollDriveVideo: string;
  };
  oneVideoMultipleLives: {
    broadcast1987Still: string;
    meme2008ForumGif: string;
    remastered4kStill: string;
  };
  realWorldPranks: {
    projectChanology: string;
    macysParade: string;
    metsStadium: string;
    mtvAwards: string;
  };
  afterlife: {
    astleyPortraitCelebration: string;
  };
}

export const mediaConfig: AppMediaConfig = {
  // --------------------------------------------------------------------------
  // SECTION 1: HERO — NEVER GONNA GIVE YOU UP
  // --------------------------------------------------------------------------
  hero: {
    // High-resolution still from the 1987 music video (Rick Astley in beige trench coat)
    heroImage:
      'https://file.garden/atDNoqj9Xr_pDZ7l/rickastley.jpg',

    // Embedded Google Drive preview player for the archival 1987 video clip
    videoEmbed:
      'https://drive.google.com/file/d/1cHUGPxJKANBEUPF_r1yhjItU__x5OX1r/preview',

    // Authentic analog VHS scanline texture
    vhsTexture:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80',

    // Rick Astley 1987 press portrait
    astleyPortrait:
      'https://file.garden/atDNoqj9Xr_pDZ7l/rickastley.jpg',
  },

  // --------------------------------------------------------------------------
  // SECTION 2: BEFORE THE INTERNET (1987 POP CONTEXT)
  // --------------------------------------------------------------------------
  beforeTheInternet: {
    // RCA Records official 7" single sleeve (1987)
    singleCover:
      'https://file.garden/atDNoqj9Xr_pDZ7l/RA_sleeve.jpg',

    // PWL Hit Factory studio recording session
    studioSession:
      'https://file.garden/atDNoqj9Xr_pDZ7l/studio.jpeg',

    // Pete Waterman & Mike Stock analog mixing console reference
    peterWatermanArchive:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',

    // Mike Nicholls London shoot still (Camden Club & Church Hall)
    trenchCoatStill:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Rick_Astley_-_Never_Gonna_Give_You_Up.png',
  },

  // --------------------------------------------------------------------------
  // SECTION 3: HOW RICKROLLING HAPPENED (BAIT-AND-SWITCH)
  // --------------------------------------------------------------------------
  howRickrollingHappened: {
    // The precursor "Duckroll" image (wooden duck on wheels from 4chan 2006)
    duckrollGif:
      'https://file.garden/atDNoqj9Xr_pDZ7l/Screenshot%202026-10-27%20181058-gigapixel-standard%20v2-4x.jpeg',

    // Animated GIF of Rick Astley’s iconic side-step shuffle dance
    rickrollDanceGif:
      'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif',

    // Grand Theft Auto IV 2007 official trailer leak bait poster
    gtaTrailerLeakMockup:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',

    // YouTube April Fools Day 2008 homepage archive
    youtubeAprilFools2008:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',

    // Google Drive video embed of the full bait-and-switch demonstration
    rickrollDriveVideo:
      'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview',
  },

  // --------------------------------------------------------------------------
  // SECTION 4: ONE VIDEO, MULTIPLE LIVES
  // --------------------------------------------------------------------------
  oneVideoMultipleLives: {
    // 1987 Era: Broadcast CRT Television
    broadcast1987Still:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80',

    // 2008 Era: Viral internet forum prank animated reaction GIF
    meme2008ForumGif:
      'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif',

    // Modern Era: 4K Remastered Streaming Culture
    remastered4kStill:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
  },

  // --------------------------------------------------------------------------
  // SECTION 5: REAL WORLD PRANKS (IRL MANIFESTATIONS)
  // --------------------------------------------------------------------------
  realWorldPranks: {
    // Project Chanology boombox protests outside Scientology
    projectChanology:
      'https://file.garden/atDNoqj9Xr_pDZ7l/sorry.png',

    // Macy's Thanksgiving Day Parade Cartoon Network float ambush
    macysParade:
      'https://file.garden/atDNoqj9Xr_pDZ7l/sorry.png',

    // New York Mets Shea Stadium crowd sing-along poll
    metsStadium:
      'https://file.garden/atDNoqj9Xr_pDZ7l/sorry.png',

    // MTV Europe Music Awards Best Act Ever ceremony
    mtvAwards:
      'https://file.garden/atDNoqj9Xr_pDZ7l/sorry.png',
  },

  // --------------------------------------------------------------------------
  // SECTION 6: AFTERLIFE
  // --------------------------------------------------------------------------
  afterlife: {
    astleyPortraitCelebration:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rick_Astley_1989.jpg/640px-Rick_Astley_1989.jpg',
  },
};
