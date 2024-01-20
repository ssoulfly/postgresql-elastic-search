## Gerekenler

- Node.js
- PostgreSQL
- ElasticSearch (Cloud)

## Kullanılan Paketler

- Elastic Search
- Express.js
- Moment
- PG
- UUID
- JWT (Json Web Token)

## Kurulum (Kısaca)

- PostgresSQL Bağlantınızı oluşturun ve Config.js dosyasına bilgileri ekleyin.
- ElasticSearch Hesabı oluşturun ve gerekli işlemleri yapıp API key alın ve Config.js de bilgileri doldurun.
- Config.js dosyasında JWT bilgisini bırakmış bulunmaktayım crypto kullanarak bir token oluşturup koyabilirsiniz.

- `yarn start:migrations` Yazarak gerekli tabloları ve eklentileri postgresql oluşturun. (Konsolu Terminate Ediniz)
- `yarn start:seed` Yazarak mock data oluşturabilirsiniz. (Konsolu Terminate Ediniz)
- `yarn start` son olarak bu kodu çalıştırınız ve projeniz ayakta 🎉 🎉
