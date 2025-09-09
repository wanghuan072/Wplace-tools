<template>
    <div class="pixel-art-generator-page">
        <!-- 主功能组件 -->
        <div class="main-component-section">
            <div class="container">
                <div class="component-content">
                    <div class="generator-header">
                        <h1>{{ t('pixelArtGenerator') }}</h1>
                        <p>{{ t('imageConverterDescription') }}</p>
                    </div>
                    <PixelArtGeneratorUnified />
                </div>
            </div>
        </div>

        <!-- 功能介绍区域 -->
        <section class="features-section">
            <div class="container">
                <div class="features-content">
                    <h2 class="section-title">{{ t('imageConverterFeatures') }}</h2>
                    <p class="section-subtitle">{{ t('professionalImageProcessing') }}</p>

                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756794953471" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="53556" width="200" height="200">
                                    <path
                                        d="M886.186667 404.667733l-129.826134-153.4464a41.506133 41.506133 0 0 0-31.658666-14.677333h-10.461867v-41.472a67.072 67.072 0 0 0-67.072-67.072H246.272a67.072 67.072 0 0 0-67.072 67.072v566.784a67.072 67.072 0 0 0 67.072 67.072h62.208v22.784a41.472 41.472 0 0 0 41.472 41.472H854.528a41.472 41.472 0 0 0 41.472-41.472V431.445333a41.437867 41.437867 0 0 0-9.813333-26.7776zM663.04 236.544H349.952a41.472 41.472 0 0 0-41.472 41.472v499.712H246.272a15.854933 15.854933 0 0 1-15.872-15.872V195.072a14.0288 14.0288 0 0 1 15.872-15.872h400.896a14.0288 14.0288 0 0 1 15.872 15.872z"
                                        fill="#54B89C" p-id="53557"></path>
                                    <path
                                        d="M590.506667 572.757333l-91.136-52.565333a17.066667 17.066667 0 0 1 0-29.525333l90.248533-52.616534a17.066667 17.066667 0 0 1 17.152 0l91.153067 52.718934a17.066667 17.066667 0 0 1 0 29.525333L607.573333 572.7232a17.066667 17.066667 0 0 1-17.066666 0"
                                        fill="#FFFFFF" p-id="53558"></path>
                                    <path
                                        d="M472.1152 553.1648l125.5936 72.516267 1.399467 0.9216 125.576533-72.874667a17.066667 17.066667 0 0 1 25.6 14.6944l0.341333 99.652267a17.066667 17.066667 0 0 1-8.533333 14.848l-143.4624 82.773333v0.904533l-143.9744-83.217066a17.066667 17.066667 0 0 1-8.533333-14.830934l0.341333-100.693333a17.066667 17.066667 0 0 1 25.6512-14.6944z"
                                        fill="#FFFFFF" p-id="53559"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">{{ t('multiFormatSupport') }}</h3>
                            <p class="feature-description">{{ t('multiFormatSupportDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795056510" class="icon" viewBox="0 0 1025 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="55508" width="200" height="200">
                                    <path
                                        d="M616.59648 33.934865C616.59648 15.193156 601.403321 0 582.66165 0L441.340822 0C422.59915 0 407.405992 15.193156 407.405992 33.934865L407.405992 136.612771 435.230543 103.232556C363.206268 116.416801 296.479426 149.052592 241.29995 197.306995L284.994913 196.479587 207.711691 133.896905C193.146703 122.102366 171.777942 124.348303 159.983404 138.913346L71.047415 248.740241C59.252877 263.305285 61.498792 284.673947 76.063779 296.468487L154.771068 360.204443 146.094963 318.031694C114.150753 378.748442 97.192077 446.759115 97.192077 517.194692 97.192077 523.159402 97.313721 529.110417 97.55595 535.045141L131.462709 533.660298 123.828966 500.595182 26.309914 523.109217C8.04864 527.325184-3.337534 545.546657 0.878521 563.808016L32.668778 701.506782C36.884657 719.768142 55.106207 731.154181 73.367658 726.938214L170.001655 704.628494 131.136441 684.836497C160.367228 753.615764 207.214698 813.251457 266.430499 857.386775L256.209567 815.301952 211.737777 906.482453C203.521942 923.327389 210.517274 943.643148 227.362251 951.858972L354.380447 1013.809938C371.225423 1022.025762 391.54123 1015.030486 399.757065 998.18555L444.452193 906.547064 413.951647 891.670999 405.305203 924.485856C438.58997 933.256053 473.012789 937.737419 507.982566 937.737419 545.680772 937.737419 582.736684 932.52929 618.405429 922.361644L609.102566 889.726808 578.602019 904.602875 624.245407 998.18555C632.461241 1015.030486 652.777048 1022.025762 669.622025 1013.809938L796.640221 951.858972C813.485197 943.643148 820.48053 923.327389 812.264695 906.482453L765.618141 810.842998 755.922097 852.528591C812.677473 808.485893 857.494422 750.016074 885.604458 682.998449L846.677274 702.937706 950.634814 726.938214C968.896265 731.154181 987.117815 719.768142 991.333694 701.506782L1023.12395 563.808016C1027.340006 545.546657 1015.953832 527.325184 997.692557 523.109217L892.206963 498.755949 884.573219 531.821067 918.485804 533.050629C918.67701 527.777291 918.772877 522.491373 918.772877 517.194692 918.772877 448.699664 902.737214 382.485253 872.451178 323.017813L863.567978 364.790556 947.938692 296.468487C962.50368 284.673947 964.749594 263.305285 952.955057 248.740241L864.019068 138.913346C852.22453 124.348303 830.855768 122.102366 816.290781 133.896905L734.807393 199.880932 778.843277 201.010582C725.148601 152.767205 660.048684 119.487657 589.515917 104.941543L616.59648 138.176991 616.59648 33.934865ZM575.807382 171.412439C634.44533 183.505427 688.652359 211.216511 733.483255 251.49597 745.889721 262.642935 764.557418 263.121814 777.519139 252.625618L859.002527 186.641592 811.274417 181.62515 900.210406 291.452045 905.226946 243.723801 820.856055 312.04587C808.406157 322.12772 804.702632 339.543121 811.973032 353.818613 837.42208 403.788518 850.90304 459.454632 850.90304 517.194692 850.90304 521.671408 850.822179 526.137482 850.660634 530.591504 850.071481 546.843016 861.094135 561.227986 876.939652 564.886182L982.425247 589.23945 956.993677 548.540649 925.203421 686.239414 965.902301 660.807982 861.944585 636.807472C845.84501 633.090581 829.408397 641.509685 823.017401 656.746729 799.42709 712.988642 761.835873 762.031549 714.313269 798.909539 701.621848 808.758164 697.575106 826.156496 704.617225 840.595129L751.263779 936.234584 766.888077 890.858063 639.869881 952.809029 685.246323 968.433419 639.602935 874.850744C632.392563 860.067023 615.61803 852.582848 599.799702 857.091972 570.165319 865.539526 539.370284 869.867689 507.982566 869.867689 478.864066 869.867689 450.2528 866.142909 422.598091 858.856141 406.940425 854.730522 390.549363 862.241675 383.451277 876.794933L338.756149 968.433419 384.13259 952.809029 257.114394 890.858063 272.738692 936.234584 317.210483 845.054083C324.361357 830.392571 320.068679 812.717582 306.98955 802.969259 257.418946 766.022785 218.128596 716.007136 193.599206 658.290259 187.160188 643.139042 170.774952 634.794948 154.734168 638.498262L58.100171 660.807982 98.799051 686.239414 67.008794 548.540649 41.577225 589.23945 139.096276 566.725415C154.998643 563.054055 166.035244 548.582564 165.369291 532.275456 165.164491 527.263405 165.061914 522.23581 165.061914 517.194692 165.061914 457.821835 179.317937 400.649887 206.159095 349.632508 213.696971 335.305064 210.064419 317.648068 197.48299 307.459759L118.775526 243.723801 123.792066 291.452045 212.728055 181.62515 164.999945 186.641592 242.28299 249.224273C255.110886 259.612033 273.552596 259.262821 285.977953 248.396865 332.03659 208.118685 387.580116 180.952548 447.451101 169.992986 463.568331 167.042695 475.275652 152.997731 475.275652 136.612771L475.275652 33.934865 441.340822 67.869729 582.66165 67.869729 548.726819 33.934865 548.726819 138.176991C548.726819 154.276789 560.039548 168.160585 575.807382 171.412439ZM730.345048 517.194692C730.345048 391.885469 630.986681 289.955896 507.982566 289.955896 384.978273 289.955896 285.619906 391.885469 285.619906 517.194692 285.619906 642.503915 384.978273 744.433487 507.982566 744.433487 630.986681 744.433487 730.345048 642.503915 730.345048 517.194692ZM353.489567 517.194692C353.489567 428.986289 422.85515 357.825626 507.982566 357.825626 593.109804 357.825626 662.475388 428.986289 662.475388 517.194692 662.475388 605.403095 593.109804 676.563758 507.982566 676.563758 422.85515 676.563758 353.489567 605.403095 353.489567 517.194692Z"
                                        fill="#389BFF" p-id="55509"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">{{ t('adjustableParameters') }}</h3>
                            <p class="feature-description">{{ t('adjustableParametersDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795080661" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="56668" width="200" height="200">
                                    <path
                                        d="M526.47292021 951.331154c-20.82938582 0-38.39362468-16.66350866-39.40694614-37.60548575-4.84142481-99.86846068-84.44345605-178.2319879-181.27195232-178.23198791-74.42283259 0-144.67978803-19.70347308-197.93546096-55.39490717-26.90931466-18.12719522-48.30165686-39.40694616-63.27629642-63.38888768-16.32573484-25.89599319-24.54489789-53.59344678-24.54489789-82.41681309 0-56.97118501 13.39836169-112.25350091 39.74471998-164.15807856 25.33303682-49.76534344 61.36224473-94.35148822 107.29948482-132.51993036 93.33816676-77.68797957 217.07597768-120.47266396 348.4699953-120.47266397 131.39401761 0 255.13182855 42.7846844 348.46999528 120.47266397 45.82464881 38.16844213 81.966448 82.75458693 107.29948483 132.51993036 26.34635828 51.90457765 39.74471997 107.18689355 39.74471998 164.15807856 0 56.1830461-13.06058787 110.67722305-38.73139852 161.90625306-24.54489789 49.20238705-59.78596688 93.33816676-104.48470293 131.39401761-90.74856743 77.1250232-211.6715965 121.03562033-340.58860608 123.62521966-0.33777383 0.11259128-0.56295637 0.11259128-0.78813893 0.11259127z m-11.03394491-777.78052584c-242.18383194 0-439.21856273 161.79366179-439.21856273 360.74244424 0 36.5921643 22.40566367 71.72064201 62.93852258 98.96773048 44.02318842 29.61150526 103.24619892 45.82464881 166.52249533 45.82464882 121.48598543 0 222.25517632 93.22557548 236.21649439 215.27451729 229.0106528-11.37171875 412.64702189-170.2380074 412.64702187-360.06689659 0.11259128-198.94878245-196.92213951-360.74244423-439.10597144-360.74244424z"
                                        fill="#1296db" p-id="56669"></path>
                                    <path
                                        d="M643.91902978 776.20229253c-26.50895677 0-53.01791354-10.11166393-73.24124139-30.33499179-19.5401073-19.5401073-30.33499175-45.50248765-30.33499175-73.24124136s10.79488446-53.70113407 30.33499175-73.24124137c40.31001158-40.31001158 106.03582707-40.31001158 146.34583866 0s40.31001158 106.03582707 0 146.34583863c-20.08668374 20.35997195-46.5956405 30.47163587-73.10459727 30.47163589z m0-179.68700077c-19.5401073 0-39.08021463 7.37878177-53.83777817 22.27298943-14.34763123 14.34763123-22.27298945 33.47780623-22.27298945 53.83777819s7.92535822 39.49014694 22.27298945 53.83777817c29.65177123 29.65177123 78.02378512 29.65177123 107.81220046 0 29.65177123-29.65177123 29.65177123-78.02378512 0-107.81220047-14.89420767-14.75756357-34.43431498-22.13634533-53.97442229-22.13634532z"
                                        fill="#1296db" p-id="56670"></path>
                                    <path
                                        d="M809.07440898 420.5886416m-82.37077578 0a82.37077578 82.37077578 0 1 0 164.74155156 0 82.37077578 82.37077578 0 1 0-164.74155156 0Z"
                                        fill="#d81e06" p-id="56671"></path>
                                    <path
                                        d="M575.31802784 289.94090755m-67.82665281 0a67.82665286 67.82665286 0 1 0 135.6533057 0 67.82665286 67.82665286 0 1 0-135.6533057 0Z"
                                        fill="#1296db" p-id="56672"></path>
                                    <path
                                        d="M297.38050256 363.95667103m-58.8693335 0a58.86933349 58.86933349 0 1 0 117.73866703 0 58.86933349 58.86933349 0 1 0-117.73866703 0Z"
                                        fill="#48EF7E" p-id="56673"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">{{ t('colorPalette') }}</h3>
                            <p class="feature-description">{{ t('colorPaletteDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795118705" class="icon" viewBox="0 0 1032 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="59371" width="200" height="200">
                                    <path
                                        d="M1014.997308 555.522391h-0.787736a55.366559 55.366559 0 0 0-55.028958-50.583878H522.043629V67.688994a55.254025 55.254025 0 0 0-54.803891-55.141491V11.309632l-6.189351 0.675202A499.987032 499.987032 0 0 0 15.24831 497.117424l-0.1688-0.225067v13.560305a500.043299 500.043299 0 0 0 450.303423 498.917963 497.736359 497.736359 0 0 0 367.759987-109.889115 498.355294 498.355294 0 0 0 182.304522-337.826034l-0.450134-6.133085z m-889.466015-45.013462a390.097917 390.097917 0 0 1 286.398154-376.650146v426.277488c0 30.440354 24.701137 55.141491 55.141491 55.141492h425.939887a390.660586 390.660586 0 0 1-376.762679 286.792021h-0.618936a388.241112 388.241112 0 0 1-276.157591-115.009396 388.016045 388.016045 0 0 1-113.940326-270.924776h0.056267l-0.056267-5.626683z"
                                        fill="#4DA1FF" p-id="59372"></path>
                                    <path
                                        d="M604.024397 412.829716c10.46563 10.521897 24.363536 16.31738 39.105445 16.31738l315.150503 0.337601a54.972691 54.972691 0 0 0 52.215616-37.755042h1.294137l0.844003-4.670146c0.675202-3.938678 0.675202-7.98989 0.675202-12.941371l0.393868-5.514149c0.393868-5.570416 0.731469-11.028298 0.731468-16.767514A340.526842 340.526842 0 0 0 637.109292 14.122974a55.028958 55.028958 0 0 0-49.177208 54.691356v293.937909c0.112534 1.744272 0.225067 3.54481 0.506402 5.289082a53.340953 53.340953 0 0 0-0.506402 5.68295 54.353756 54.353756 0 0 0 16.092313 39.105445z m297.426452-94.021869h-203.066982l0.112534-195.020826a230.300126 230.300126 0 0 1 202.954448 195.020826z"
                                        fill="#4DA1FF" p-id="59373"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">{{ t('usageStatistics') }}</h3>
                            <p class="feature-description">{{ t('usageStatisticsDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 使用说明区域 -->
        <section class="instructions-section">
            <div class="container">
                <div class="instructions-content">
                    <h2 class="section-title">{{ t('howToUseImageConverter') }}</h2>
                    <p class="section-subtitle">{{ t('stepByStepGuide') }}</p>

                    <div class="instructions-grid">
                        <div class="instruction-step">
                            <div class="step-number">1</div>
                            <h3 class="step-title">{{ t('uploadYourImage') }}</h3>
                            <p class="step-description">{{ t('uploadYourImageDesc') }}</p>
                        </div>

                        <div class="instruction-step">
                            <div class="step-number">2</div>
                            <h3 class="step-title">{{ t('adjustSettings') }}</h3>
                            <p class="step-description">{{ t('adjustSettingsDesc') }}</p>
                        </div>

                        <div class="instruction-step">
                            <div class="step-number">3</div>
                            <h3 class="step-title">{{ t('reviewCustomize') }}</h3>
                            <p class="step-description">{{ t('reviewCustomizeDesc') }}</p>
                        </div>

                        <div class="instruction-step">
                            <div class="step-number">4</div>
                            <h3 class="step-title">{{ t('downloadResult') }}</h3>
                            <p class="step-description">{{ t('downloadResultDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 技术特点区域 -->
        <section class="tech-section">
            <div class="container">
                <div class="tech-content">
                    <h2 class="section-title">{{ t('technicalFeatures') }}</h2>
                    <p class="section-subtitle">{{ t('advancedAlgorithms') }}</p>

                    <div class="tech-grid">
                        <div class="tech-item">
                            <h3>{{ t('localProcessing') }}</h3>
                            <p>{{ t('localProcessingDesc') }}</p>
                        </div>

                        <div class="tech-item">
                            <h3>{{ t('colorDistanceAlgorithm') }}</h3>
                            <p>{{ t('colorDistanceAlgorithmDesc') }}</p>
                        </div>

                        <div class="tech-item">
                            <h3>{{ t('realTimePreview') }}</h3>
                            <p>{{ t('realTimePreviewDesc') }}</p>
                        </div>

                        <div class="tech-item">
                            <h3>{{ t('batchProcessingReady') }}</h3>
                            <p>{{ t('batchProcessingReadyDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 常见问题区域 -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-content">
                    <h2 class="section-title">{{ t('frequentlyAskedQuestions') }}</h2>
                    <p class="section-subtitle">{{ t('everythingAboutImageConversion') }}</p>

                    <div class="faq-grid">
                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('bestPixelSize') }}</h3>
                            <p class="faq-answer">{{ t('bestPixelSizeAnswer') }}</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('howColorReplacementWorks') }}</h3>
                            <p class="faq-answer">{{ t('howColorReplacementWorksAnswer') }}</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('whatArePremiumColors') }}</h3>
                            <p class="faq-answer">{{ t('whatArePremiumColorsAnswer') }}</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('canUseForCommercial') }}</h3>
                            <p class="faq-answer">{{ t('canUseForCommercialAnswer') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import PixelArtGeneratorUnified from '@/components/PixelArtGeneratorUnified.vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.pixel-art-generator-page {
    min-height: 100vh;
    background: #f8f9fa;
}

.generator-header {
    text-align: center;
    margin-bottom: 30px;
}

.generator-header h1 {
    color: #333;
    margin-bottom: 10px;
}

.generator-header p {
    color: #666;
    font-size: 14px;
}

/* 主组件区域样式 */
.main-component-section {
    background: white;
    padding: 40px 0;
    border-bottom: 1px solid #e9ecef;
}

.component-content {
    max-width: 1200px;
    margin: 0 auto;
}

/* 通用区域样式 */
.section-title {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.section-subtitle {
    font-size: 18px;
    text-align: center;
    color: #666;
    margin-bottom: 60px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* 功能介绍区域样式 */
.features-section {
    background: white;
    padding: 80px 0;
}

.features-content {
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.feature-card {
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin: 0 auto 20px;
}

.feature-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.feature-description {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* 使用说明区域样式 */
.instructions-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.instructions-content {
    text-align: center;
}

.instructions-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.instruction-step {
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.instruction-step:hover {
    transform: translateY(-5px);
}

.step-number {
    width: 60px;
    height: 60px;
    background: #00bcd4;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    margin: 0 auto 20px;
}

.step-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.step-description {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* 技术特点区域样式 */
.tech-section {
    background: white;
    padding: 80px 0;
}

.tech-content {
    text-align: center;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

.tech-item {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    text-align: left;
}

.tech-item h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.tech-item p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
}

/* FAQ 区域样式 */
.faq-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.faq-content {
    text-align: center;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.faq-item {
    background: white;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
}

.faq-question {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.faq-answer {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* 响应式设计 */
@media (max-width: 1024px) {

    .features-section,
    .instructions-section,
    .tech-section,
    .faq-section {
        padding: 60px 0;
    }

    .generator-header {
        margin-bottom: 10px;
    }

    .generator-header h1 {
        font-size: 20px;
    }

    .generator-header p {
        font-size: 13px;
    }

    .section-title {
        font-size: 28px;
    }

    .section-subtitle {
        font-size: 16px;
        margin-bottom: 40px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    .instructions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    .tech-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .feature-card,
    .instruction-step,
    .tech-item,
    .faq-item {
        padding: 30px 25px;
    }
}

@media (max-width: 768px) {

    .features-section,
    .instructions-section,
    .tech-section,
    .faq-section {
        padding: 40px 0;
    }

    .generator-header h1 {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .generator-header p {
        font-size: 12px;
    }

    .section-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .section-subtitle {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .instructions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .faq-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .feature-card,
    .instruction-step,
    .tech-item,
    .faq-item {
        padding: 10px;
    }

    .step-number {
        font-size: 28px;
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .feature-icon {
        margin: 0 auto 10px;
    }

    .feature-title,
    .step-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .feature-description,
    .step-description {
        font-size: 12px;
    }

    .tech-item h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .tech-item p {
        font-size: 12px;
    }

    .faq-question {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .faq-answer {
        font-size: 12px;
    }
}
</style>
