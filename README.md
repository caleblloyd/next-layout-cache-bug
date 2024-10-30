# next-layout-cache-bug


```bash
npm install
npm run dev
```

## To Reproduce

Navigate to [http://localhost:3000/now](http://localhost:3000/now)

1. "Now Page" loads fine initially
2. Click "Home Page"
3. Click "Now Page", it is stuck at the suspense and never makes the API call

[Video of bug starting from Now Page](https://github.com/caleblloyd/next-layout-cache-bug/raw/refs/heads/main/start-from-now-page.webm)

**If you start at the Home Page things work fine**

Navigate to [http://localhost:3000](http://localhost:3000)

1. Click on "Now Page", it works
2. Click on "Home Page"
3. Click on "Now Page" again, it works

[Video of things working starting from Home Page](https://github.com/caleblloyd/next-layout-cache-bug/raw/refs/heads/main/start-from-home-page.webm)
