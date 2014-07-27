---
layout: program
title: CoDe CPH 2014 Program
---
#JCICPH 14 - Program

##Jenkins CI State of the Union
{: #state_of_union}

#### Keynote

######[Kohsuke Kawaguchi](/speakers#kohsuke), CloudBees

In the state of union keynote for Jenkins, Kohsuke will go over where the community is today and introduce various current efforts in the community to show where the development is happening. The topic includes workflow, docker integration, user interface improvements, chef/puppet integration, quality improvement effort, and so on.


## Two for One
{: #two_for_one}

#### Building Resilient CI Infrastructure and Introducing Workflow

######[Kohsuke Kawaguchi](/speakers#kohsuke), CloudBees

Come to our show where Kohsuke talks about what CloudBees is adding to Jenkins. The first part of the talk is about the challenges of deploying, operating and using large-scale Jenkins installations, and what we are doing to help those users succeed. In particular, I'll demo how Jenkins Operations Center by CloudBees helps organizations scale Jenkins horizontally. The second part of the talk is about the workflow plugin we are building in open-source, and how it drastically simplifies dealing with complex orchestration such as the continuous delivery pipeline. I'll show you how this offers both the flexibility and the simplicity, and where we plan to take this in this year.

## Pretested Integration in Jenkins CI
{: #pretested_integration}

#### Using a "Branchy Approach"

######[Lars Kruse](/speakers#kruse), Praqma

######[Per-Arnold Blåsmo](/speakers#blaasmo), Atmel

Our newest Jenkins plugin represent distilled lessons learned in the field of continuos and automated integration. In close collaboration Praqma and Atmel have developed a generic plugin offering one-click support for pretested integration in Distributed Version Control Systems such as Mercurial and Git. We will present this "branchy approach" to pre-tested integration and argue why we have come to believe that this approach is preferable over alternatives frequently being used by other technologies. We will touch on the impressive journey Atmel is taking and present the automated workflow strategy already implemented at Atmel in their _all-Atlassian-except-Jenkins_ tool stack based on ten simple principles and the [pretested integration plugin](https://wiki.jenkins-ci.org/display/JENKINS/Pretested+Integration+Plugin).

## Using Jenkins as a Component
{: #jci_as_component}

###### [Jonas Bovin](/speakers#bovin), Vitec ALOC

With the 'Parameterized Build' plugin a build could suddenly be much more than just the newest build - it enables a Jenkins job to do anything. The solid handling of jobs, logs, integration to SCM systems and slaves are immensely powerful. The presentation will show how Vitec ALOC has built a small set of Java classes communicating with Jenkins via the API to harness the power of Jenkins from their existing tools.

-Yes, the presentation will show code too!

## The Butler and the Snake
{: #butler_snake}

#### Continuous Integration for Python

###### [Timo Stollenwerk](/speakers#stollenwerk), Plone Foundation

Plone is a Python-based enterprise content management system and is among the top 2% of all Open Source projects worldwide. It is developed by a distributed team of 340 core developers using Jenkins as a centerpiece of the development and release process. This talk will present how the Plone community uses Jenkins to build, test, and deliver Python-based software projects.

## What is your next step in Continuous Delivery?
{: #next_step}

###### [Adriaan de Jonge](/speakers#de_jonge), XebiaLabs

Regardless of where you are in Continuous Delivery, you can take it one step further. There is always an option to do it just a bit faster, cheaper or better. This presentation will take you on a tour from a situation where nothing is automated, all the way to an ideal form of continuous deployment. For the impatient, the presentation concludes with a recipe to take 5 steps at a time. You can go from 0 to 60 mph in 2 seconds.

This presentation describes a vision and steps that a company can grow in Continuous Delivery. Continuous Integration – which is most often implemented using Jenkins – is a central and vital component in this vision. See the place of Jenkins in this CD architecture, where it can be used in its strength. The presentation will show where you could use Jenkins, because Jenkins can basically do anything, but it is not necessarily the best tool available. And finally, it will reveal where you actually should use Jenkins, in places the audience may not have expected and where it is the right and appropriate tool – for example in Automated Provisioning / Infrastructure as Code.

## Using Jenkins for metadata harvesting on DR's danskkulturarv.dk
{: #metadata}

###### [Kræn Hansen](/speakers#hansen), BIT BLUEPRINT

At BIT BLUEPRINT we have been using Jenkins CI as a platform and GUI to run and administer long-running jobs. Jobs that run for several hours harvesting metadata, essentially migrating multiple large datasets of cultural heritage data into the web services running the backends the "Danskkulturarv.dk" project. A project initiated by the Danish Broadcasting Corporation aggregating cultural heritage data from sources such as the National Museum of Denmark, the Danish Film Institute amongst others.

## Jenkins Meets Docker
{: #docker}

###### [Nicholas De Loof](/speakers#de_loof), CloudBees

Docker is the perfect tool to assist Jenkins setting up a continuous delivery pipeline. During this presentation I'll quickly introduce Docker and suggest few ways to use it in combination with Jenkins.

## CI-Push - The awesome and right way to do CI
{: #rightway}

###### [Nikolaj Ougaard](/speakers#ougaard), Topdanmark

One of the worst things about CI is polling. Polling is an anti pattern and the solution is push. This talk will present a new open source solution that enables all CI systems incl. Jenkins to use a push setup. The solution is a loosely coupled system so no point to point integrations are needed.

## Manage your jobs with Job DSL
{: #dsl}

###### [ Niels Bech Nielsen](/speakers#nielsen), Nine Consult

The job-dsl-plugin allows the programmatic creation of projects using a DSL. Pushing job creation into a script allows you to automate and standardize your Jenkins installation, unlike anything possible before.
Learn how to keep your job configuration modular, under source control, and easily scriptable using Groovy DSL.

## Taking Measures
{: #measures}

###### [Robert Sandell](/speakers#sandell), Sony Mobile Communications

During the past year Sony Mobile have consolidated their Jenkins maintenance data into one central graphite server. From memory usage and http requests, to available slaves, how many jobs are executed, and how long time they spend in queue. This allows Sony Mobile to react more quickly when things break and follow up with historical data. This talk covers how the company are taking some of these measurements and what can be learned from them.

## Building a Service Delivery Platform
{: #serviceplatform}

###### [Andreas Rehn](/speakers#rehn), Diabol

This talk will walk through the critical parts of a tool chain that forms the service delivery platform, a robust, secure solution with Jenkins as the main orchestrator that scales with many teams and hundreds of pipelines. I will show a tool chain with Git, Jenkins, Jenkins Job Builder, Puppet, Graphite, Logstash and more that is proven in battle. I will share insights and details on good ways of building a platform for pipelines that recognizes the individual teams needs for fast feedback, traceability and visibility in the delivery process.

## Why Version Control requires CI - and CI Version Control
{: #versioncontrol}

###### [Sven Erik Knopp](/speakers#knopp), Perforce

Why is a version control system necessary for CI? Why is CI necessary for a version control systems?
What is the role of code review in this process? It is all about protecting the mainline - making sure your project is always ready to build and deploy. Learn about how to keep your projects safe using the example of a build pipeline based on Perforce, Swarm and the new Jenkins Perforce plugin.
