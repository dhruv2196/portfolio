# Photo Style Options for Your Portfolio

## Current Options in portfolio-config.js:

### 1. Style Options:
- **"square"** (default) - Standard rectangular photo with rounded corners
- **"circular"** - Round profile photo (best for headshots)
- **"portrait"** - Adds padding for portrait-oriented photos

### 2. Object Fit Options:
- **"cover"** - Fills the entire container (may crop edges)
- **"contain"** - Shows entire photo (may have empty space)
- **"fill"** - Stretches to fill (may distort)

## To Change Your Photo Style:

Edit `portfolio-config.js`:

```javascript
avatar: {
    type: "image",
    image: "Photo.jpg",
    style: "circular",     // Change this
    objectFit: "cover"     // And this
}
```

## Additional CSS Classes (Advanced):

You can also manually add these classes to `.hero-image` in the HTML:

1. **professional** - Adds a thick frame border
2. **gradient-border** - Adds gradient border effect
3. **polaroid** - Polaroid photo style with tilt

## Recommendations:

- **For professional headshot**: Use `style: "circular"` with `objectFit: "cover"`
- **For full body photo**: Use `style: "square"` with `objectFit: "contain"`
- **For casual photo**: Use `style: "portrait"` with `objectFit: "contain"`

## Quick Test:

Try different combinations:
```javascript
// Professional look
style: "circular",
objectFit: "cover"

// Full photo visible
style: "portrait", 
objectFit: "contain"

// Standard look
style: "square",
objectFit: "cover"
```