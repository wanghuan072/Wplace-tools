<template>
    <div class="privacy-policy-view">
        <section class="policy-section">
            <div class="container">
                <div class="policy-content">
                    <h1 class="page-title">Privacy Policy</h1>
                    <p class="last-updated">Last updated: August 22, 2025</p>

                    <div class="policy-content-text">
                        <h2>1. Information We Collect</h2>
                        <p>Wplace Tools collects information you provide directly to us when you use our pixel art
                            conversion services. This may include:</p>
                        <ul>
                            <li>Images and text content you upload for conversion</li>
                            <li>Usage data and preferences</li>
                            <li>Technical information about your device and browser</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the collected information to:</p>
                        <ul>
                            <li>Provide and improve our pixel art conversion services</li>
                            <li>Process your image and text conversions</li>
                            <li>Maintain and enhance website functionality</li>
                            <li>Communicate with you about our services</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties. Your
                            uploaded content is processed locally and is not stored permanently on our servers.</p>

                        <h2>4. Data Security</h2>
                        <p>We implement appropriate security measures to protect your information. However, no method of
                            transmission over the internet is 100% secure.</p>

                        <h2>5. Cookies and Tracking</h2>
                        <p>We use cookies to improve your browsing experience and analyze website traffic. You can
                            control cookie settings through your browser preferences.</p>

                        <h2>6. Third-Party Services</h2>
                        <p>Our services may integrate with third-party platforms like wplace.live. Please review their
                            respective privacy policies.</p>

                        <h2>7. Children's Privacy</h2>
                        <p>Our services are not intended for children under 13. We do not knowingly collect personal
                            information from children under 13.</p>

                        <h2>8. Changes to This Policy</h2>
                        <p>We may update this privacy policy from time to time. We will notify you of any changes by
                            posting the new policy on this page.</p>

                        <h2>9. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at:</p>
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
    name: 'PrivacyPolicyView'
}
</script>

<style scoped>
.privacy-policy-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.policy-section {
    background: white;
    padding: 60px 0;
}

.policy-content {
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

.policy-content-text h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 8px;
}

.policy-content-text p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
}

.policy-content-text ul {
    margin: 15px 0 20px 20px;
}

.policy-content-text li {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 8px;
}

.policy-content-text strong {
    color: #333;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .policy-section {
        padding: 50px 0;
    }

    .page-title {
        font-size: 32px;
    }

    .policy-content-text h2 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .policy-content-text p,
    .policy-content-text li {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .policy-section {
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

    .policy-content-text h2 {
        font-size: 16px;
        margin: 10px 0 10px 0;
    }

    .policy-content-text p,
    .policy-content-text li {
        font-size: 12px;
        line-height: 1.5;
    }

    .policy-content {
        padding: 0 10px;
    }
}
</style>
