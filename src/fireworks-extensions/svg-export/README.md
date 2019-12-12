# Fireworks JavaScript Command - SVG Export

Exports current Fireworks document state as SVG graphics format.

Install by copying to Fireworks/Configuration/Commands/

Run via the Commands menu in Fireworks

## TODO

### Game Features

- [ ] combine repeated filters and effects
- [x] id filter for f1, f2, ...fN
- [ ] edit begin if there is image (image-rendering) in document
- [ ] edit begin if there is text (text-rendering) in document
- [ ] remove semicolom
- [ ] export DOM file

### SVG Features

- [x] rectangle primitives -> DONE-v0.5
- [x] symbols to def/use tags -> DONE-v0.5.2
- Filters:
    - [x] gaussian blur, blur, blur more
    - [x] dropshadow
    - [ ] inner shaddow
    - [x] glow
    - [ ] inner glow
    - [ ] bevel/emboss
    - [ ] adjust color filters
    - [ ] noise
    - [ ] convert to alpha
    - [ ] PS effects to not be supported
- [x] text -> DONE-v0.5
    - [ ] support wrapping (force line-breaks? svg extension?)
    - [ ] kerning and line-spacing
- [x] pattern fills -> DONE-v0.6
- [ ] textured fills
- [ ] recognize identical definitions and re-use rather than re-define
- [x] export images -> DONE-v0.5
- [ ] embed images (base64 encode, requires SWF)
- [ ] when rendering hidden layer (as group) use visibility setting
- [ ] blend modes via feBlend
- [x] masking/clipping paths -> Done-v0.6
- [ ] intelligent filter sizing
- [x] render hotspots as `<a>` tags -> Done-v0.6
- [ ] flatten unsupported effects
    - [ ] preserve vectors
    - [ ] cases to flatten: unsupported filters, transform uvw other than 001, any gradient other than linear or radial/ellipse, pattern/texture fills
- [ ] support feather by applying blur
- [ ] render default names for all elements
- [ ] wrap path data
- [ ] use userSpaceOnUse for gradient positioning
- [ ] use polygon/polyline for paths with no curves

### JSF Code

- [ ] use a string buffering method or more intermediate strings to avoid gigantic string concatenations -- benchmark to see if its an issue anyway
- [ ] investigate the use of html export extensions
- [x] export selected elements -> DONE-v0.4
- [ ] copy to clipboard
- [x] browseForFolder instead of file so it can remember last location -> VOID-found workaround for file URL location.

### Dialog UI

- [ ] selected elements | entire canvas
- [ ] include hidden objects | exclude hidden objects
- [ ] maintain appearance | preserve vectors
- [ ] fixed doc size | scaleable doc size
- [ ] export svg doc | export svg elements only
- [ ] number precision
- [ ] embed images | export images
- [ ] export entire library | export used symbols only
- [ ] convert text to paths

### Bugs

- [x] text positioning is totally wrong -> FIXED-v0.5.8
- [x] glow fails when glow size is 0 -> FIXED-v0.5.7
- [x] gradient doesn't work right when first color is beyond first opacity node -> FIXED-v0.5.6
- [x] glow color doesn't show in FF -- renders as black -> FIXED-v0.4

## Sources

[Language Identifiers in VSCode](https://code.visualstudio.com/docs/languages/identifiers)