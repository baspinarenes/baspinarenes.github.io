const siteData = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.enesbaspinar.com",
  title: "Enes Başpınar",
  author: {
    name: "Enes Başpınar",
    title: "Associate Developer",
    company: "Trendyol",
    summary:
      "Kendimden çok kısa bahsetmem gerekirse, araştırma yapmaktan ve bir şeyler öğrenmekten keyif duyan birisiyim. Öğrendiklerimi aktarmayı seviyorum ve bunun tezahürü olarak bloguma nacizane yazılar yazmaya çalışıyorum. Motivasyonum; tekdüze ve sıkıcı blog yazılarından insanları kurtarmak. Okuduğum çoğu yazıdan sonra çığlık atasım geliyor ve isyanımı buradan haykırıyorum. Yandaki emojinin sebebi de bu. Gelecek yazılarda buluşalım!",
  },
  description: "Abidik gubidik yazılım blogu.",
  footer: "2022 © No rights are reserved.",
  socials: {
    twitter: "enesbaspinar0",
    github: "baspinarenes",
  },
  page: {
    blog: {
      title: "Blog",
      description:
        "İlk yazımı Mayıs 2020 de yazmıştım ancak sonrasında çok yazmadım. Bitirip beğenmediğim ve sildiğim de oldu. Ama yeniden döndüm. Yazılarımı resmiliğin sıkıcılığından uzak tutmaya çabalıyorum ve hafif goygoy ile süslüyorum. Okuyucuyla birlikte sorgulayarak ilerleyebilecek şekilde kurgulamayı seviyorum ve kafanızda oluşbilecek soruları cevaplamaya çalışıyorum. Okursanız feedback vermeyi unutmayın.",
    },
  },
};

export default siteData;
