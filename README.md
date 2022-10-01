<p align="center">
 <img width="350px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1664491433/yassi/susj6yvlmhbfwxa6i8uy.svg" align="center" alt="idiom" />
</p>

<br>

<p align="center">
  <b>a web application to generate unique randomized words & phrases with api endpoints support built with
  </b>
  <br>
</p>

<p align="center">
  <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1658183164/yassi/mgkhs4y9ydmoyjyozulf.svg" align="center" alt="nodejs" />
  &nbsp; &nbsp; &nbsp;
  <img width="150px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1663804918/yassi/mxrjfvymnux04jhjwlh2.svg" align="center" alt="nodejs" />
  &nbsp; &nbsp; &nbsp;
  <img width="300px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1660842725/yassi/dglubft3rg2iuh6fxsaf.svg" align="center" alt="tailwind" />
</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1664572768/yassi/bxx8jd7ab8mwcm2rdona.png" alt="idiom" width="500" style="border-radius: 5px;">

</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1657122244/yassi/goafdvoalju7ty1seuqo.gif" alt="star-repo" style="border-radius: 5px;">
  <br>
</p>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Usage

**_I start learning the most beloved framework [Sveltekit](https://kit.svelte.dev) and that's what i'm using in the frontend_**

You can test the api in the demo application app [https://iidiom.vercel.app](https://iidiom.vercel.app)

idiom supports 8 word types that can be used to form a phrase:

- `adjective`
- `adverb`
- `animal`
- `bodyParts`
- `gerunds`
- `pluralNouns`
- `verbs` (imperative mood)

> Additional Features

When placed at the beginning of a phrase, the word `a` will be transformed into `an` if the second word in the phrase begins with a vowel (i.e. _a/an squid/octopus_). You can also use any additional words to form a phrase like _the_, _it_, _is_, etc.

> Forming a phrase

To form a phrase, connect the type(s) of words you want with a @. For example, to form a phrase consisting of a verb, `the`, and a plural noun, you would use the following:`the @pluralNoun is @gerund`

#### API

You can make a `GET` request to [https://idiom.ysnirix.live/api/PHRASE](https://idiom.ysnirix.live/api/), where PHRASE is the type of phrase desired.

```bash
curl --request GET \
  --url 'https://idiom.ysnirix.live/api/the%20@pluralNoun%20is%20@gerund'
```

Example response

```json
{
  "message": "🎉 done",
  "error": false,
  "code": 200,
  "results": "the oranges is striking"
}
```

### Development

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

#### Client

```bash
# for the client
cd client
npm run dev
# or start the Client and open the app in a new browser tab
npm run dev -- --open

# for the server
cd server
npm run dev
```

### Production

```bash
# for the client
cd client
npm run build

# for the server
cd server
npm start
```

> You can preview the built client app with `npm run preview`,This should _not_ be used to serve your app in production.

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and features requests, [please create an issue](../../issues/new).

#### Author

**Ysn4Irix**

- [GitHub Profile](https://github.com/Ysn4irix)
- [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
