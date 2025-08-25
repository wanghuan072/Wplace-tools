<template>
    <div class="terms-of-use-view">
        <section class="terms-section">
            <div class="container">
                <div class="terms-content">
                    <h1 class="page-title">Terms of Use</h1>
                    <p class="last-updated">Last updated: August 22, 2025</p>

                    <div class="terms-content-text">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using Wplace Tools, you accept and agree to be bound by the terms and
                            provision of this agreement. If you do not agree to abide by the above, please do not use
                            this service.</p>

                        <h2>2. Description of Service</h2>
                        <p>Wplace Tools provides pixel art conversion services, including:</p>
                        <ul>
                            <li>Image to pixel art conversion</li>
                            <li>Text to pixel art conversion</li>
                            <li>Color palette management</li>
                            <li>Export and download functionality</li>
                        </ul>

                        <h2>3. User Responsibilities</h2>
                        <p>You agree to:</p>
                        <ul>
                            <li>Use the service only for lawful purposes</li>
                            <li>Not upload content that infringes on intellectual property rights</li>
                            <li>Not attempt to disrupt or compromise the service</li>
                            <li>Respect the rights of other users</li>
                        </ul>

                        <h2>4. Intellectual Property</h2>
                        <p>Wplace Tools retains all rights to the service, including but not limited to the software,
                            design, and content. Users retain rights to their uploaded content and generated pixel art.
                        </p>

                        <h2>5. Privacy and Data</h2>
                        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we
                            collect, use, and protect your information.</p>

                        <h2>6. Service Availability</h2>
                        <p>We strive to maintain high service availability but cannot guarantee uninterrupted access. We
                            reserve the right to modify, suspend, or discontinue the service at any time.</p>

                        <h2>7. Limitation of Liability</h2>
                        <p>Wplace Tools shall not be liable for any indirect, incidental, special, consequential, or
                            punitive damages resulting from your use of the service.</p>

                        <h2>8. Third-Party Services</h2>
                        <p>Our service may integrate with third-party platforms like wplace.live. We are not responsible
                            for the content or practices of these third-party services.</p>

                        <h2>9. Modifications to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Continued use of the service
                            constitutes acceptance of any changes.</p>

                        <h2>10. Contact Information</h2>
                        <p>For questions about these terms, please contact us at:</p>
                        <p><strong>Email:</strong> kadiyamobi89@gmail.com</p>
                        <p><strong>Date:</strong> August 22, 2025</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TermsOfUseView'
}
</script>

<style scoped>
.terms-of-use-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.terms-section {
    background: white;
    padding: 60px 0;
}

.terms-content {
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

.terms-content-text h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 8px;
}

.terms-content-text p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
}

.terms-content-text ul {
    margin: 15px 0 20px 20px;
}

.terms-content-text li {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 8px;
}

.terms-content-text strong {
    color: #333;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .terms-section {
        padding: 50px 0;
    }

    .page-title {
        font-size: 32px;
    }

    .terms-content-text h2 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .terms-content-text p,
    .terms-content-text li {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .terms-section {
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

    .terms-content-text h2 {
        font-size: 16px;
        margin: 10px 0 10px 0;
    }

    .terms-content-text p,
    .terms-content-text li {
        font-size: 12px;
        line-height: 1.5;
    }

    .terms-content {
        padding: 0 10px;
    }
}
</style>
