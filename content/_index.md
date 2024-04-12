---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing


sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: ckabalan
  #- block: skills
  #  id: skills
  #  content:
  #    title: Skills
  #    text: ''
  #    # Choose a user to display skills from (a folder name within `content/authors/`)
  #    username: ckabalan
  #  design:
  #    columns: '1'
  - block: experience
    id: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Solutions Architect
          company: Amazon Web Services
          company_url: 'https://aws.amazon.com/'
          company_logo: org-aws
          location: Phoenix, AZ
          date_start: '2022-04-04'
          date_end: ''
          description: |2-
            I'm currently a Solutions Architect with Amazon Web Services working with State and Local Government customers in the Western US. I help our SLG customers design and implement cloud solutions to accomplish their mission quickly with the most effective solution possible.
            
            Major accomplishments:
            - Primary architect partnering with all government customers in the State of New Mexico to design cloud architectures and advise on best practices using Amazon Web Services.
            - Regularly leading in-depth technology discussions across all levels including CIOs leading large state agencies, technical architects, and engineers across multiple disciplines.
            - Consulting weekly on complex hybrid cloud network architectures as part of a specialist networking team. Topics include integrating across AWS, Azure, Direct Connect, Express Route, Palo Alto, on-premises, co-located data centers, routing protocols, automation, often all in the same architecture.
            - Spoke publicly on AWS topics at several local New Mexico events. Additionally, publicly presenting to large groups of customers to educate on cloud concepts, perform live demos, and drive progress. 
            - Created several public tech artifacts including blog posts and sample code demonstrating AWS Well Architected Framework best practices for scalable, reliable, and secure cloud deployments.
            - Look around corners to protect customers before they have issues including proactive cost optimization, architecture reviews, security, resiliency, and overall cloud best practice advise.
            - Often leveraging my wide experience to help customers tackle on-premises technical challenges to build trust and position AWS as a long term trusted partner, even before they’re a customer.
        - title: Principal Cloud Engineer
          company: W. L. Gore & Associates, Inc.
          company_url: 'https://www.gore.com/'
          company_logo: org-wlgore
          location: Phoenix, AZ
          date_start: '2016-10-01'
          date_end: '2022-04-01'
          description: |2-
            Primary subject matter expert and escalation point for all things related to AWS, Azure, cloud security, cloud networking, cloud development, and cost optimization for a large global manufacturing organization.

            Responsible for the architecting, engineering, planning, and implementation of Amazon Web Services and Microsoft Azure. Primary duties involved working closely with IT Architects and IT Leadership regarding strategy and timelines for the implementation of cloud services and supporting/mentoring developers utilizing AWS techologies. Technical duties consisted of working hands-on as part of a small team to implement cloud technologies including autoscaling, continuous integration/delivery, configuration management, and cross-cloud deployments all using DevOps practices.

            Founding member of a Cloud Enablement Services group aimed at assisting and easing the utilization of cloud resources by traditional infrastructure and development teams. Frequently met with project implementation teams to evaluate cloud-readiness of new applications and general consulting around cloud technologies and capabilities. Additional responsibilities included writing and maintaining Software Quality Assurance documentation including System Design Specifications, Requirements Specifications, Test Procedures, and Build Procedures to document and test important capabilities of our cloud environments and deployments.

            Major accomplishments:
            - Architected, planned, and migrated to a cutting-edge cloud networking strategy encompassing many AWS VPCs across regions and accounts brought together with AWS Transit Gateway, Direct Connect, VPN, and Palo Alto VM-series firewalls. Entire deployment is orchestrated with AWS CloudFormation (VPCs), HashiCorp Terraform (TGW/DX/VPN), and Palo Alto Panorama (firewalls).
            - Worked as part of a team to design, develop, and deploy a custom IoT platform using AWS IoT Core, IoT Greengrass, API Gateway, Lambda, DynamoDB, ElasticSearch, S3, and Cognito. Includes a web interface for provisioning and managing IoT devices and their metadata, as well as access to ElasticSearch’s Kibana interface for viewing IoT data.
            - Developed multiple Jenkins pipelines to automate process and speed up developer/admin productivity. Built and contributed to pipelines for deploying AMIs, CloudFormation/SAM Templates, Ansible Playbooks, Terraform, and RightScale CATs.
            - Integral in design and implementation of a cross-cloud deployment process across AWS, Azure, and on-premise VMware. Involved the deployment of a Cloud Management Platform, Ansible Tower, Ansible Playbooks, and Red Hat Satellite.
            - Implemented AWS DirectConnect and Azure ExpressRoute to enhance the connectivity between our AWS VPCs, Azure vNets, and our on-premise network.
            - Worked as part of a small team to architect and build our first Microsoft Azure deployment including Subscriptions, VNETs, ARM Templates, and PowerShell deployment scripts.
            - Designed and implemented a robust provisioning system using ServiceNow, AWS CloudFormation, AWS Lambda, and Puppet to build Linux and Windows workloads upon request.
            - Engineered a cloud-oriented Puppet Configuration Management implementation using r10k with continuous delivery for flexible management of EC2 instances.
            - Worked as part of a small team to architect a mutli-account mutli-VPC AWS structure for highly flexible permission and network requirements.
            - Evaluated and implemented multiple SaaS vendors including Datadog for system monitoring and CloudHealth for cloud governance/reporting.
            - Architected and built first experimental AWS deployments primarily consisting of legacy PHP and Java web applications.
        - title: Data Center Systems Engineer
          company: W. L. Gore & Associates, Inc.
          company_url: 'https://www.gore.com/'
          company_logo: org-wlgore
          location: Phoenix, AZ
          date_start: '2013-10-01'
          date_end: '2017-02-01'
          description: |2-
            Worked with a team of DataCenter Systems Engineers and Administrators responsible for designing and maintaining Enterprise DataCenter and Cloud Systems for a large global organization. Primary responsibilities included architecting, planning, provisioning, and maintaining hundreds of Linux systems consisting of database servers, application servers, and multiple high performance compute clusters. Other responsibilities included maintaining complex VMware environments and associated storage and networking environments, and managing parts of a larger Windows/Active Directory environment with the global Systems Administration team. Also led projects as relevant needs arose, including requirements gather, forming timelines, working with external vendors, and deploying global systems.

            Major Accomplishments:
            - Architected and built the first Amazon Web Services cloud deployments focusing on Infrastructure-as-a-Service, automation, and scalability.
            - Planned, automated, and executed the migration of hundreds of NAS shares from an Hitachi HNAS to an EMC VNX.
            - Assisted in implementation of a second 250kw UPS + Generator to provide a redundant (active/active) power path to DataCenter equipment.
            - Championed the implementation of SolarWinds Orion on multiple continents to monitor, analyze, and alert on server and network health worldwide.
            - Implemented Puppet Configuration Management to fully manage 200+ previously independent Linux systems.
            - Built extensive dashboard tools for public display and quick identification of systemic issues across VMware, EMC, NetApp, SolarWinds, Dell, and APC.
            - Lifecycled High-Performance Compute Cluster including hardware, job scheduler, queuing system, analysis software, filesystems, and license servers.
            - Heavily involved in maintaining and bringing several aspects of infrastructure into a qualified state to support business compliance with FDA regulations.
            - Upgraded multi-vCenter VMware environment from ESX 5.1 to 5.5 with zero guest downtime (new vCenter architecture meant rebuilding from scratch).
        - title: Client Computing Engineer
          company: W. L. Gore & Associates, Inc.
          company_url: 'https://www.gore.com/'
          company_logo: org-wlgore
          location: Phoenix, AZ
          date_start: '2012-05-01'
          date_end: '2023-11-01'
          description: |2-
            Worked with a team of automation associates to plan, develop, and execute enterprise-wide software and configuration rollouts. Other responsibilities included scripting a variety of installation methods, third tier support, software development, and strategy planning. Also functioned as a Citrix Administrator focused on the deployment of software via Citrix XenApp as well as part of a project team focused on Virtual Desktop Infrastructure. Championed the implementation of a DataCenter monitoring solution: Nagios XI Enterprise.

            Major Accomplishments:
            - Provided excellent on-going third tier support to users, desktop support associates, and phone support agents.
            - Extensive evaluation of multiple hyper-converged products (Nutanix and Simplivity) in comparison to existing internal infrastructure.
            - Championed the implementation of a regional DataCenter monitoring solution for servers, services, and storage: Nagios XI Enterprise.
            - Built dozens of deployment bundles for many different software applications, including those under strict change-control procedures.
            - Upgraded global Novell Zenworks environment from 10.X to 11.3.2.
        - title: Data Center Intern
          company: W. L. Gore & Associates, Inc.
          company_url: 'https://www.gore.com/'
          company_logo: org-wlgore
          location: Flagstaff, AZ
          date_start: '2011-05-01'
          date_end: '2022-05-01'
          description: |2-
            Worked with a team of IT System Administrators in a FDA validated environment to continuously improve datacenter systems, infrastructure, and procedures. Wrote numerous small programs and scripts to automate repetitive administrative tasks such as username resolution, file metadata synchronization, and auditing. Extensively tested and assisted in the initial rollout of a contractor developed printer removal script via Novell ZenWorks. Assisted in imaging and configuring over one hundred laptops for field sales associates. 
        - title: Software Developer
          company: Northern Arizona University
          company_url: 'https://nau.edu/'
          company_logo: org-nau
          location: Flagstaff, AZ
          date_start: '2011-03-01'
          date_end: '2011-08-01'
          description: |2-
            Developed a grade feedback system for the purpose of allowing students to perform What-If analysis on grades. Process included gathering requirements, setting deadlines, writing the code, testing, receiving feedback, deploying, and documenting in an iterative way. GradeTrack was developed in PHP, JavaScript, and HTML/CSS for the W.A. Franke College of Business. Currently in use by 6 professors and over 900 students. 
        - title: AT&T Home Networking Agent
          company: Volt Technical Resources
          company_url: 'https://www.volt.com/'
          company_logo: org-volt
          location: Phoenix, AZ
          date_start: '2010-05-01'
          date_end: '2010-08-01'
          description: |2-
            Provided DSL technical support via telephone for AT&T. Handled 1,500 calls with a cumulative Agent Quality Score over 95%. Average Call Length 40 seconds better than AT&T average. Gained valuable customer service experience and methods for conveying technical instructions to the average computer user.
        - title: Network / Computer Technician
          company: Payson Unified School District
          company_url: 'https://www.pusd10.org/'
          company_logo: org-pusd
          date_start: '2006-05-01'
          date_end: '2006-08-01'
          description: |2-
            Assisted in maintaining the Payson Unified School District network. Responsibilities included server room setup, backup rotation, client computer maintenance, and network infrastructure implementation.
    design:
      columns: '2'
  - block: accomplishments
    id: certifications
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Certifications'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: https://www.credly.com/badges/49afff73-8c59-4bb7-826f-0a6c8f163945
          date_end: '2025-10-20'
          date_start: '2022-10-20'
          description: 'Earners of this certification have the ability to design and maintain network architecture for all AWS services. They demonstrated the ability to leverage tools to automate AWS networking tasks based on business needs. Badge owners are able to design and implement AWS and hybrid IT network architectures at scale.'
          icon: org-aws
          organization: Amazon Web Services
          organization_url: https://www.credly.com/org/amazon-web-services
          title: AWS Certified Advanced Networking – Specialty
          url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/'
        - certificate_url: https://www.credly.com/badges/49afff73-8c59-4bb7-826f-0a6c8f163945
          date_end: '2025-02-14'
          date_start: '2022-02-14'
          description: 'Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices and trade-offs based on business context. Badge owners are able to design solutions across multiple platforms and providers.'
          icon: org-aws
          organization: Amazon Web Services
          organization_url: https://www.credly.com/org/amazon-web-services
          title: AWS Certified Solutions Architect – Professional
          url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/'
    design:
      columns: '2'
#  - block: collection
#    id: posts
#    content:
#      title: Recent Posts
#      subtitle: ''
#      text: ''
#      # Choose how many pages you would like to display (0 = all pages)
#      count: 5
#      # Filter on criteria
#      filters:
#        folders:
#          - post
#        author: ""
#        category: ""
#        tag: ""
#        exclude_featured: false
#        exclude_future: false
#        exclude_past: false
#        publication_type: ""
#      # Choose how many pages you would like to offset by
#      offset: 0
#      # Page order: descending (desc) or ascending (asc) date.
#      order: desc
#    design:
#      # Choose a layout view
#      view: compact
#      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      #buttons:
      #  - name: All
      #    tag: '*'
      #  - name: Open Source Projects
      #    tag: Open Source
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: collection
    id: thoughtleadership
    content:
      title: Thought Leadership
      filters:
        folders:
          - publication
        featured_only: false
    design:
      columns: '2'
      view: card
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # Contact (add or remove contact options as necessary)
      email: caesar.kabalan@gmail.com
      address:
        city: Gilbert
        region: Arizona
        postcode: '85298'
        country: United States
        country_code: US
      coordinates:
        latitude: '33.233847'
        longitude: '-111.720513'  
      contact_links:
        - icon: linkedin
          icon_pack: fab
          link: https://www.linkedin.com/in/caesarkabalan
          name: DM Me
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
    design:
      columns: '2'
---
