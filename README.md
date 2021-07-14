georgia
=======

Georgia's Site!

### Deploy

`aws --profile skyline s3 cp . s3://georgiascott.co.uk/ --recursive`

`aws --profile skyline cloudfront create-invalidation --distribution-id E2DT4GAXGK5G94 --paths '/*'`
