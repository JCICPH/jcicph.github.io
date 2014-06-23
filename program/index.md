---
layout: post
title: CoDe CPH 2014 Program
---
# CoDe CPH 2014 Program

<h2 id="jci_state_of_union">Keynote: Jenkins State of the Union</h2>

_<a href="/speakers/#kohsuke">Kohsuke Kawaguchi</a>, CloudBees_

There's a lot happening in the Jenkins project. The presentation will go over the past, present, and future of the project. A look back at how the project grew, what the developers have been focusing on, and the various new features that have come out of it. The presentation will present current Jenkins CI work as well as what is believed to become important in the future.

<h2 id="cd_whats_the_point">Continuous Delivery&nbsp; - What's the point?</h2>

_<a href="/speakers/#lars">Lars Kruse</a>, Praqma_

Continuous Delivery (CD) is the new black within the software development industry. Everybody talks about it, but what is it really? The session presents a comprehensive introduction to the concept of CD. With an off-set in the popular Continuous Delivery Maturity Model, which we have developed over the past few years, we will dig into a selected range of areas that all contribute to Continuous Delivery processes of software development teams. The presentation will present the signs that indicate different levels of maturity within significant disciplines such as; version control, testing, software metrics, build, deployment, visibility, and system architecture. The presentation will include real-life implementations of CD pipelines founded on the Jenkins CI platform.

<h2 id="CI_early_n_often">Continuous Integration; Do it early and do it often</h2>

_<a href="/speakers/#richard">Richard Corden</a>, Programming Research_

PRQA delivers Coding Standard Compliance using static analysis tools. The principle of Continuous Integration – “do it early and do it often”, applies just as much to coding standard enforcement. To help with this, we are offering a plugin that integrates our software quality products QA·C and QA·Verify into Jenkins. We are also eating our own food and have this year started using Jenkins for our in-house development. The presentation will give an insight on our own Jenkins case study, explain the motivation behind this change, analyse the key changes we have realized, and provide a practical insight into our Jenkins plugin.

<h2 id="jci_assisted_reviews">Jenkins assisted Code Reviews</h2>

_<a href="/speakers/#knud">Knud Poulsen</a>, Switch Gears_

Make Jenkins your new best friend when it comes to streamlining peer code reviews; from review readiness evaluation, reviewer selection and load balancing, to predictive review time estimation, and beyond. Peer code reviews will never be the same again. Inspired by my summer reading of the excellent book "Race Against the Machine" I started thinking about how we could view Jenkins as more of a Colleague or Peer when it comes to Peer Code Review. Through custom Jenkins jobs, scripts, tips and tricks, the presentation will demonstrate how it is possible to make Jenkins feel (a bit) more like a peer than an automation when it comes to helping with peer code reviews.

<h2 id="jci_in_the_startup_chaos">Using Jenkins CI in the chaos that is a startup</h2>

_<a href="/speakers/#frederik_jan">Frederik Hantho &amp; Jan Wiberg</a>, Panorama9_

Panorama9 has been using Jenkins extensively over the past 2 years to automate all manners of tasks. A few of note include using Selenium to automate front-end integration testing of our web based product on multiple browsers and platforms, and building our products from debug builds to certified release candidates. We also integrate into Jenkins to show live job statistics on a wall-mounted display. We have found that Jenkins, augmented with suitable plugins, is a huge asset to a small company building complex systems. We have also run into problems where Jenkins was a bad fit. The presentation will discuss pros and cons of using Selenium, essential plugins, issues experienced with testing heavily networked products and finally, hooking into Jenkins' REST API for displaying vital information outside Jenkins.

<h2 id="solving_pretested_commits">Solving pre-tested commits with Jenkins</h2>

_<a href="/speakers/#ronni">Ronni Lindsgaard &amp; Alexander Uldall</a>, DIKU_

Pretested commits is the second most wanted feature in the Jenkins community. Four guys from the University of Copenhagen's Computer Science Department took on the task of making this possible with as little customization as possible. As a result the Pretested Integration plugin came to life, which makes it possible to pre-test commits, verifying the changes before integrating them into the main development branch. The presentation will present the evolution of the plugin and the final result, presenting the use of the plugin, as well as how to extend the functionality.

<h2 id="favorite_plugins">Our Favorite Plugins</h2>

_<a href="/speakers/#bue">Bue Petersen</a>, Praqma_

A facilitated discussion and demonstration of the most popular <em>must-have</em> plugins. Bue will demonstrate our favorites and you are encourged to join this birds-of-a-feather session and advodate for your own favorites as well. Feel like doing a short demo yourself? Contact<a href="mailto:events@praqma.com"> events@praqma.com</a> for a stand on the podium.

<h2 id="controlling_oss_licences">Controlling Open Source Licenses with Jenkins</h2>

_<a href="/speakers/#rami">Rami Sass</a>, White Source_

See how you can use Jenkins latest integration with White Source to fully monitor and control all Open Source Licenses, including dependencies. The plugin continuously and automatically updates your inventory when a new Open Source component is added to ensure that all Open Source components are reported, analyzed, and reviewed for approval - without any overhead. The presentation will show the pain of mismanaging Open Source with focus on licensing requirements. This is followed by a review of the White Source solution for automation of Open Source management as well as a demo of the Jenkins plugin that integrates with the solution. The presentation will go through the installation of the plugin, the operation, and the build. Lastly, a brief review of Open Source inventory and reports, followed by the implementation of Open Source policies with Jenkins.

<h2 id="creating_jci_plugins">Creating a Jenkins Plugin</h2>
_<a href="/speakers/#jesse">Jesse Glick</a>, CloudBees_

Many people want to make little customizations to Jenkins and decide to do it in a plugin, but founder anywhere from the basic Maven setup to the fine points of Jelly control flow or XStream serialization. Get hands-on experience writing and testing a small plugin. Experience an introduction to Jenkins plugins and how to create and run a plugin project. The presentation will cover extensions and extension points as well as model objects. Furthermore, the session will discuss Jelly views, describables/descriptors, and data bindings. Finally the presentation will touch upon the persistence with Xstream followed by the testing with JenkinsRule.

<h2 id="getting_groovy_with_jci">Getting groovy with Jenkins CI</h2>
_<a href="/speakers/#robert">Robert Sandell</a>, Sony Mobile Communications_

Jenkins has a script console where you can run Groovy scripts in the Jenkins' VM. With this you can perform feats of magical proportions, spanning from extracting useful information to manipulating the internal object model. There is also a couple of plugins that help you boost your Groovy magic even more, like enhancing your build logic and make some mini "plugin like" post build steps.

This workshop is aimed for people who want to squeeze a bit more out of their Jenkins or solve ad' hoc domain specific problems. Maybe you are thinking about making your first plugin and are looking for a way to dip your toes a bit before swimming in the big ocean.

The presentation starts by showing a bunch of examples of what you can do. After that a discussion around these and maybe try to solve some requests or at least point you in the right direction.