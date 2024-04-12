---
title: "Creating a simple public file repository on Amazon S3"
authors:
- ckabalan
- Grant Joslyn
author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2024-03-26T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-03-26T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["post-weblog"]

# Publication name and optional abbreviated publication name.
publication: "AWS Storage Blog"
publication_short: ""

abstract: |2-
  Organizations often need to store and serve various types of static content, such as data sets, archives, and file repositories, on the web. This content is typically accessed by end-users for research and analysis purposes or general content distribution. However, presenting this content in a user-friendly and easily browsable manner can be a significant challenge, particularly when dealing with large volumes of data, high traffic, or complex file structures.

  Previously, organizations had to set up FTP servers or configure web server features like Apache’s DirectoryIndex or Nginx’s Autoindex to create browsable directory listings for their static content. Many have now chosen Amazon Simple Storage Service (S3) as their preferred storage solution for static web content combined with Amazon CloudFront for a highly scalable, cost-optimized, and serverless solution to publish content on the web.

  In this post, I walk through deploying a simple web-based file browser solution for publishing files in an Amazon S3 bucket. This approach utilizes S3 and CloudFront to provide a user-friendly interface for browsing your bucket’s contents, eliminating the need to deploy and maintain additional web server infrastructure. I’ll also review ways to quickly move data into the public S3 bucket, customize the solution with your own domain, and tailor the appearance to match your organization’s branding requirements.

# Summary. An optional shortened abstract.
summary: I walk through deploying a simple web-based file browser solution for publishing files in an Amazon S3 bucket. This approach utilizes S3 and CloudFront to provide a user-friendly interface for browsing your bucket’s contents, eliminating the need to deploy and maintain additional web server infrastructure.

tags:
  - AWS Blog Post
  - AWS Sample Code
featured: true

# links:
# - name: ""
#   url: ""
links:
  - icon: aws
    icon_pack: fab
    name: AWS Storage Blog Post
    url: https://aws.amazon.com/blogs/storage/creating-a-simple-public-file-repository-on-amazon-s3/
  - icon: github
    icon_pack: fab
    name: AWS Sample Code
    url: https://github.com/aws-samples/public-file-browser-for-amazon-s3
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: Interface Screenshot
  focal_point: Smart
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---
