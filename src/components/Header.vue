<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <router-link to="/" class="logo-link">
                        <span class="logo-icon">🎨</span>
                        <span class="logo-text">Wplace Tools</span>
                    </router-link>
                </div>

                <nav class="navigation">
                    <router-link to="/" class="nav-link" active-class="active">Home</router-link>
                    <router-link to="/pixel-art-generator" class="nav-link" active-class="active">Image to Pixel
                        Art</router-link>
                    <router-link to="/text-to-pixel-art" class="nav-link" active-class="active">Text to Pixel
                        Art</router-link>
                    <router-link to="/wplace-plugins" class="nav-link" active-class="active">Wplace
                        Plugins</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.header {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}

.logo-link {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #333;
    font-weight: 700;
    font-size: 20px;
}

.logo-icon {
    font-size: 28px;
}

.logo-text {
    font-size: 20px;
}

.navigation {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
}

.nav-link.active {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
}
</style>
