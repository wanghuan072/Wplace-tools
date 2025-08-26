<template>
    <div class="copyright-view">
        <section class="copyright-section">
            <div class="container">
                <div class="copyright-content">
                    <h1 class="page-title">Copyright Information</h1>
                    <p class="last-updated">Last updated: August 22, 2025</p>

                    <div class="copyright-content-text">
                        <h2>Copyright Notice</h2>
                        <p>© 2024-2025 Wplace Tools. All rights reserved.</p>

                        <h2>1. Copyright Ownership</h2>
                        <p>All content on this website, including but not limited to text, graphics, logos, images,
                            software, and design elements, is the property of Wplace Tools and is protected by
                            international copyright laws.</p>

                        <h2>2. Permitted Use</h2>
                        <p>You may use our pixel art conversion services for personal and commercial purposes, subject
                            to the following conditions:</p>
                        <ul>
                            <li>Generated pixel art belongs to you and may be used freely</li>
                            <li>Our tools and interface design remain our intellectual property</li>
                            <li>You may not reverse engineer or copy our software</li>
                            <li>Attribution is appreciated but not required</li>
                        </ul>

                        <h2>3. User-Generated Content</h2>
                        <p>When you upload images or text for conversion:</p>
                        <ul>
                            <li>You retain all rights to your original content</li>
                            <li>You must have the right to use the content you upload</li>
                            <li>We do not claim ownership of your uploaded materials</li>
                            <li>Generated pixel art is your creative work</li>
                        </ul>

                        <h2>4. Third-Party Content</h2>
                        <p>Our service may reference or integrate with third-party platforms like wplace.live. Please
                            respect their respective copyright and intellectual property rights.</p>

                        <h2>5. DMCA Compliance</h2>
                        <p>If you believe your copyrighted work has been used inappropriately, please contact us with:
                        </p>
                        <ul>
                            <li>Description of the copyrighted work</li>
                            <li>Location of the material on our site</li>
                            <li>Your contact information</li>
                            <li>Statement of good faith belief</li>
                        </ul>

                        <h2>6. License Terms</h2>
                        <p>Wplace Tools grants you a limited, non-exclusive, non-transferable license to use our
                            services for their intended purpose. This license does not include:</p>
                        <ul>
                            <li>Reselling or redistributing our tools</li>
                            <li>Modifying or creating derivative works</li>
                            <li>Using our brand assets without permission</li>
                        </ul>

                        <h2>7. Contact Information</h2>
                        <p>For copyright-related inquiries, please contact us at:</p>
                        <p><strong>Email:</strong> jasonzim904@gmail.com</p>
                        <p><strong>Date:</strong> August 22, 2025</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CopyrightView'
}
</script>

<style scoped>
.copyright-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.copyright-section {
    background: white;
    padding: 60px 0;
}

.copyright-content {
    max-width: 800px;
    margin: 0 auto;
}

.page-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.last-updated {
    text-align: center;
    color: #666;
    font-size: 16px;
    margin-bottom: 40px;
    font-style: italic;
}

.copyright-content-text h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 8px;
}

.copyright-content-text p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
}

.copyright-content-text ul {
    margin: 15px 0 20px 20px;
}

.copyright-content-text li {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 8px;
}

.copyright-content-text strong {
    color: #333;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .copyright-section {
        padding: 50px 0;
    }

    .page-title {
        font-size: 32px;
    }

    .copyright-content-text h2 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .copyright-content-text p,
    .copyright-content-text li {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .copyright-section {
        padding: 40px 0;
    }

    .page-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .last-updated {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .copyright-content-text h2 {
        font-size: 16px;
        margin: 10px 0 10px 0;
    }

    .copyright-content-text p,
    .copyright-content-text li {
        font-size: 12px;
        line-height: 1.5;
    }

    .copyright-content {
        padding: 0 10px;
    }
}
</style>
