# Image Download Instructions

The Figma asset URLs require authentication and cannot be automatically downloaded. I've updated all image references in your code to use local file paths.

## Required Images

You need to manually export the following images from Figma and save them to `public/images/`:

1. **laptop-with-code.jpg** (was: https://www.figma.com/api/mcp/asset/43adfc33-24db-45f4-8241-b81d0a571fed)
2. **server-room.jpg** (was: https://www.figma.com/api/mcp/asset/47e27c06-1688-4c0c-8c0f-eb3f04354214)
3. **farm-technology.jpg** (was: https://www.figma.com/api/mcp/asset/4e16d922-1453-4c71-8cd7-f6eb9b5a6359)
4. **robot-worker.jpg** (was: https://www.figma.com/api/mcp/asset/16922e17-a9d4-4405-bce6-b8197a94e2d9)
5. **dr-mark-wallis.jpg** (was: https://www.figma.com/api/mcp/asset/b33db171-5f69-497f-bc8b-20c65f862859)
6. **sarah-wallis.jpg** (was: https://www.figma.com/api/mcp/asset/73a89a19-e2d0-46fc-8927-e77a8a04541f)
7. **corey-robertson.jpg** (was: https://www.figma.com/api/mcp/asset/1f8e634b-fd19-478a-b279-87b79ebae630)
8. **robot-contact.jpg** (was: https://www.figma.com/api/mcp/asset/4a299256-ac3f-4bab-88e7-087a2cc712a6)

## How to Export Images from Figma:

1. Open your Figma design file
2. Select each image element
3. Use Figma's "Export" feature (right-click or use the export panel on the right)
4. Choose the appropriate format (JPG or PNG)
5. Save the exported images with the exact filenames listed above in the `public/images/` directory

## All Code Has Been Updated

All image references in `app/page.tsx` have been updated to use local file paths (e.g., `/images/laptop-with-code.jpg`).

