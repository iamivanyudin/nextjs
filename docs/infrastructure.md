# Applications infrastructure

## Client

The application client is a static React site served by a Cloudfront
distribution.

### Components

1. Namecheap - Domain is registered through Namecheap with custom DNS
   nameservers set to AWS Route 53 DNS nameservers.
1. AWS Route 53 DNS - A _hosted zone_ in Route 53 has the following DNS records
   configured:
   - A record that aliases `iamivanyudin.com` to the Cloudfront distribution url
     `xxx.cloudfront.net`
   - A record that aliases `www.iamivanyudin.com` to `iamivanyudin.com`
     (required for www. subdomain)
   - CNAME record for ACM certificate DNS validation of iamivanyudin.com
   - CNAME record for ACM certificate DNS validation of www.iamivanyudin.com
   - NS record for nameservers
   - SOA record (start of authority)
1. AWS Cloudfront distribution - CDN with edge locations all over the world to
   serve the site content to users as quickly as possible. Distribution also
   manages:
   - Redirecting http to https
   - Origin access identity (OAI) to restrict s3 bucket so that only Cloudfront
     can read contents (forces content to be served from CDN)
   - SSL endpoint termination using a SSL certificate from AWS ACM
1. AWS S3 bucket - Object storage for static assets. Bucket holds assets and
   requests to Cloudfront are looked up in bucket. Only Cloudfront OAI is
   allowed to read bucket (to ensure assets are accessed by CDN)
1. AWS Certificate Manager (ACM) - SSL certificate for domains to enable https
   traffic. Domain ownership is verified by DNS validation (AWS will
   automatically renew certificate as long as DNS validation records are in
   place).

## Caching

1. Create a custom behavior for `index.html` in Cloudfront setting the max ttl
   to 5 seconds -> ensures latest index.html is always fetched which is
   important b/c it's not fingerprinted
2. Set a `cache_control` value in Travis S3 deploy to set a `Cache-Control`
   header setting all other assets to be cached for max amount (1 year) -> this
   is b/c all other assets are fingerprinted and can be cached indefinitely.

## CI/CD

Changes to `master` in Github will trigger a Travis build that, if successful,
will deploy the build artifact to S3.

### Components

1. Travis CI - Travis job is configured to build on every branch commit
   (Continous Integration), on change to master branch the build job will deploy
   to S3 if successful.
   - AWS IAM user with programatic access setup with an inline policy allowing
     access to the application s3 bucket.
   - IAM user access and secret keys stored as build environment variables,
     never commit security credentials!

## Resources

- [How to Deploy a Secure Static Site to AWS with S3 and CloudFront](https://benjamincongdon.me/blog/2017/06/13/How-to-Deploy-a-Secure-Static-Site-to-AWS-with-S3-and-CloudFront/)
- [How do I allow access to an Amazon S3 bucket only from a CloudFront distribution?](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/)
