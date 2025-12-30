---
layout: default
title: "SANS/CWE Top 25 Vulnerabilities"
permalink: /vulnerabilities/
description: "Complete technical analysis of SANS/CWE Top 25 Most Dangerous Software Vulnerabilities"
---

<div class="container">
    <section id="main_content">
        <h1>SANS/CWE Top 25 Most Dangerous Software Vulnerabilities (2024)</h1>
        
        <div class="last-update">
            <small>Last Updated: {{ site.time | date: "%B %d, %Y" }} (UTC+8)</small>
        </div>

        <div class="intro-section">
            <p>The CWE Top 25 is a list of the most dangerous software weaknesses based on real-world prevalence and impact data. This guide provides detailed technical analysis, exploitation techniques, and mitigation strategies for each vulnerability.</p>
            
            <div class="key-stats">
                <h3>Key Statistics:</h3>
                <ul>
                    <li>Based on 2024 CWE/SANS Top 25 list</li>
                    <li>Memory safety vulnerabilities dominate (7 of top 25)</li>
                    <li>Compiled from real-world exploit data</li>
                    <li>Includes detection and prevention strategies</li>
                </ul>
            </div>
        </div>

        <!-- VULNERABILITY LIST -->
        <div class="vulnerability-list">
            {% include vulnerability-list.html %}
        </div>

        <div class="navigation-helper">
            <h3>Quick Navigation</h3>
            <div class="quick-links">
                <a href="#memory-safety">Memory Safety</a>
                <a href="#web-security">Web Security</a>
                <a href="#injection">Injection</a>
                <a href="#access-control">Access Control</a>
            </div>
        </div>
    </section>
</div>

<!-- Include vulnerability CSS -->
<link rel="stylesheet" href="{{ '/assets/css/vulnerabilities.css' | relative_url }}">
<!-- Include vulnerability JS -->
<script src="{{ '/assets/js/vulnerabilities.js' | relative_url }}"></script>
