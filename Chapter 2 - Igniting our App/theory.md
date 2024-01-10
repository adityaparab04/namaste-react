## Namaste React Course by Akshay Saini

# _Chapter 02 - Igniting our App_

### Theory explained the course

- npm manages package which we can install using npm install.
- Dev Dependency and _just_ Dependency
- Dev dependency used in development of the product.
- package.json keeps track of all the dependencies
- package-lock.json locks the version of those dependencies so next time when installed you get exactly the same version.
- node modules consists of all the `transitive` dependency code files from the npm for a particular package.
- same like npm, npx is executing a package.
- CDN links is not a good way to bring react into your project. It is expensive as it makes network call to unpkg.com. Rather use the react from node modules. Better to use react as package.

- Parcel
  - Bundler
  - Dev Build
  - Prod Build
  - Local Server
  - HMR - Hot Module Replacement
  - Uses a file watching algorithm using C++
  - Reliable Caching in .parcel-cache and giving faster builds
  - Image Optimization
  - Minification and Compress in production
  - Consistent Hashing
  - Code Splitting
  - Differential Bundling - older browsers
  - Diagnostic
  - Error Handling
  - HTTPs
  - Tree Shaking - remove unused code
  - Different dev and prod bundles
  - for production build use npx parcel build "entry point name" make sure to remove package.json main entry point,
  - dist fodler is created to generate a development build and puts all our dev files in it

## References

- https://parceljs.org/
