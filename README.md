<div align='center'>
  <h1>UNSW Adventure Society's Website</h1>
  <h4>Bringing adventure to UNSW students since 2009</h4>
</div>
<p align="center">
  <a href="https://unswadsoc.com">Website</a> •
  <a href="#about">Tools</a> •
  <a href="#getting started">Getting started</a>  •
  <a href="#contributing">Contributing</a>
</p>

## Tools

* Content Management System (CMS): [Prismic](https://prismic.io/)
* Frontend Framework: [Next.js](https://nextjs.org/)
* Deployment: [Vercel](https://vercel.com/)
* Payments: [Stripe](https://stripe.com/au)

## Getting Started

> Note:  If you need to change website content (e.g. text and images) please do so by visiting Prismic.

Here are some use cases of why changes would need to be made to this repository:
* The colours of the website need to be changed
* A new page needs to be introduced into the website
* The design/layout of a prismic slice needs to be modified

**Prerequisites**
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en) (tested on v20.8.1) and [yarn](https://yarnpkg.com/) (tested on 1.22.19)

To perform general changes:

1. Install required dependencies with `yarn install`
2. Run a local development server with `yarn dev`. This will fetch content hosted from prismic.
3. Navigate to http://localhost:3000/
4. Perform desired changes

To modify or introduce new page types, custom types or slices:

1. Run `yarn slicemachine` in a seperate terminal
2. Navigate to http://localhost:9999/
3. Log into prismic
4. Perform desired changes

For more information on modelling content, please refer to the [prismic documentation](https://prismic.io/docs).

## Contributing

If you have an idea or improvement for the website or you would like to make a contribution, please reach out to us at [contact@unswadsoc.com](mailto:contact@unswadsoc.com)

**Contributors ♥️**

<a href="https://github.com/unswadsoc/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=unswadsoc/website" />
</a>
