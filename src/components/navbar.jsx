import React from 'react'

export default function navbar() {
    return (
        <>
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">

                                <a href="/" class="logo">
                                    Edu Meeting
                                </a>

                                <ul class="nav">
                                    <li class="scroll-to-section"><a class="active">Home</a></li>
                                    <li><a href="/">Meetings</a></li>
                                    <li class="scroll-to-section"><a href="#apply">Apply Now</a></li>
                                    <li class="has-sub">
                                        <a href="javascript:void(0)">Pages</a>
                                        <ul class="sub-menu">
                                            <li><a href="/">Upcoming Meetings</a></li>
                                            <li><a href="/">Meeting Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="scroll-to-section"><a href="#courses">Courses</a></li>
                                    <li class="scroll-to-section"><a href="#contact">Contact Us</a></li>
                                </ul>
                                <a class='menu-trigger'>
                                    <span>
                                        Menu
                                    </span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
