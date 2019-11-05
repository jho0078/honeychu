<template>
  <div>
    <h1>test</h1>
    <div v-for="(url, id) in Frappuccinos" :key="id">
      <img :src="url.coffee_image" width="200px" @click="zoom(url)" />
      <img :src="selectedImage" width="500px;" @click.stop="selectedImage = null" />
    </div>
  </div>
</template>

<script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"></script>
<script>
export default {
  name: "test",
  data() {
    return {
      isRcVisible: true,
      selectedImage: null,
      Frappuccinos: [
        {
          id: 0,
          coffee_kind: "frappuccino",
          coffee_name: "슈렉 프라푸치노",
          desciption:
            "그린 티 프라푸치노, 에스프레소 샷, 자바칩, 초코드리즐, 통 자바칩",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/848a2acf8ffd4bc981bf235d59aca9b3.jpg",
          coffee_price: "8700원"
        },
        {
          id: 1,
          coffee_kind: "frappuccino",
          coffee_name: "페레로로쉐 프라푸치노",
          desciption: "자바 칩 프라푸치노, 모카 시럽, 헤이즐넛 시럽",
          coffee_image:
            "https://t1.daumcdn.net/cfile/tistory/9953AF335C5D726C06",
          coffee_price: "6700원"
        },
        {
          id: 2,
          coffee_kind: "frappuccino",
          coffee_name: "고디바 프라푸치노",
          desciption:
            "자바 칩 프라푸치노, 헤이즐넛 시럽, 모카 시럽, 초코드리즐, 통 자바칩",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/fe606ebc60724efd974faa43abe8a512.jpg",
          coffee_price: "6300원"
        },
        {
          id: 3,
          coffee_kind: "frappuccino",
          coffee_name: "돼지바 프라푸치노",
          desciption:
            "딸기 크림 프라푸치노, 딸기시럽, 두유, 초코 드리즐, 자바칩",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/dailylife/134a6d92a09b4888af4fd957eb6ad98c.jpg",
          coffee_price: "6800원"
        },
        {
          id: 4,
          coffee_kind: "frappuccino",
          coffee_name: "트윅스 프라푸치노",
          desciption:
            "카라멜 프라푸치노, 헤이즐넛 시럽, 자바칩, 모카(or 카라멜) 드리즐, 통 자바칩",
          coffee_image:
            "https://t1.daumcdn.net/cfile/tistory/990B914E5C5D74A70F",
          coffee_price: "7400원"
        },
        {
          id: 5,
          coffee_kind: "frappuccino",
          coffee_name: "쿠앤크 프라푸치노",
          desciption: "바닐라 크림 프라푸치노, 자바칩, 초코휘핑, 통자바칩",
          coffee_image:
            "https://t1.daumcdn.net/cfile/tistory/9910594E5C5D754918",
          coffee_price: "5400원"
        },
        {
          id: 6,
          coffee_kind: "frappuccino",
          coffee_name: "페레로로쉐 프라푸치노",
          desciption: "자바칩 프라푸치노, 모카 시럽, 헤이즐넛 시럽",
          coffee_image:
            "https://img.insight.co.kr/static/2019/08/13/700/q7e05i1nas3ibsql092m.jpg",
          coffee_price: "6700원"
        },
        {
          id: 7,
          coffee_kind: "frappuccino",
          coffee_name: "그린티 프라푸치노",
          desciption: "그린티 프라푸치노, 헤이즐넛 시럽, 카라멜 시럽, 자바칩",
          coffee_image: "https://pbs.twimg.com/media/DbN3vblV4AEPHfY.jpg",
          coffee_price: "8100원"
        },
        {
          id: 8,
          coffee_kind: "frappuccino",
          coffee_name: "바닐라 크림 프라푸치노",
          desciption:
            "바닐라 프라푸치노, 뿌리는 에스프레소 샷, 헤이즐넛 드리즐",
          coffee_image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMVFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIASsAqAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEMQAAIBAgMEBwUHAgQEBwAAAAECAAMRBCExBRJBUQYTYXGBkaEiMlKxwQcUI0Jy0eFi8DNDkrJjwuLxFTREU3OCov/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EACcRAAICAgICAQMFAQAAAAAAAAABAhEDIRIxQVEEIjJhFCNCUnET/9oADAMBAAIRAxEAPwBCJdbJwmQlfg6G83dNRg6NhBiiNhFJLRuJrBFJMlJme2nit9rDQfOFOXFFQjbB6rl2LHjJKaRlNYZRSZGaUh1KlDaNCLQpywoUpQRHSw8MpYaT0aUKQAC5yElEB0w0lGGkn3ymON+4Qqi6NowJ5cfKQFySAvu0acPLXqow0pCc0VDYeQVMOJcvTg9SnJQRTVKMFYZy3rJKuuMzG4exOXojizos0CBJ0WdKIVGysLYXlygtI6FOwiYrEBFLGF0i+wPbGN3RujU+glGkZWrl2LHjHJM03bNEI0gulDqEr6TQyi8Wwy2w4llQEqMPUhq124L4n9pSTI2i3VrCVlbEuSQb906lVqk5nLuEixWKC5at/esKS0BdsWjSaTrTsbse6VTY5+6S0ajt72YgJ+C2i1faRU3FTwvceUuNmYvraYci179x7R2TJtughgBdc7HMHvHGW2D6Rg5Om7/UNPLUesu/YLXou6kFqmJ96VhdSCOYgtatIMiqGVmlXX96EV68EJvGYuxeXoSLOnTSIOnTp0og4zMbZxu+26PdHqZp6gyMytRBc95gZZUHjVgSmSK0n6gTvuw5zPyH0Ijw7Zw33CcTf0F85Xslshrz5fzLTo2AKoHNWHjrn4Aw4r2U3o0SYXdzHK2klTCjjJqHI6fKSYmnfJcxwP8AENxT2KsBxVewIXz/AGlTUXidTLSph2z00JzNvAczBVwxbXyiJtsZEgwOCeq26B28B84clIgaR2EoEMMz4cuMfXvn8gbSRSSsjKXaeshWubWktXCNxggU3i3LYaWi0wO9TW99c+6E1MSTKylVa1s4RSBtpHRVopuiUbzaSXctJMM/DjFrjONxqmLm7RFOizo4SdOiRZRB7jKZeoPaPeZq3Ey9ce0e8xOfwNxeRoE5zy1/vOKJMuH9kPcZkqBx9m1yRy9qKgrGtjsAQlwUDllIF+DN+btMudh7IcMKjeza43SMzcEfWJsLZgJFRtNV7SDr6TS0jnlHRj5YqUvCBGA4CKlS3l/YjccG91dSfWBb7adpNu06/KRumUlY9sVvG1oXhcGPeY9w4mQChugcznI67Mosp1EU/Ya9BOOKqMjaVVLE+1mcomIr3UC9+cioU76xU27DSLSqqsMsoHVwFNc73PKE0lgG03zI5SnHVksiDKNB6wmmmUqqL2Oct0qQ8cq0Roay8Y93uAfOSsIIDnNMBUx86dOjRR06dOlECnWZXFe+3fNTh2ugPf8AOZjHj8Ru+JzdIdj0xlJSTYa8O85D1llsXAdaxGe6ouSOXKDbOw7NcpfeBFrdzH6S+2NRKsV3SBbNjpe+nbwlY1oub2WtA2yAAFreH9iTJ/doiW5fWOAjRRG9G+Z15yPqbcIV1oBsTlzscjIatUZ+NoDQSBcU9z3SJ6V460ejiLX5CBDgwJwpgSavVuMtb+kGrNnf5CLlSCVhD1Qi34kZCUtQ3OcJrOx/KctD/Eip0SdcouUuWkElQ11FtI+g97CSNRXiTG00txhRTslhBaQPOd7ds4G80wYuZIJ0RNIscJOnTp0hB2zG/CXulFj0JqkAXJOQ5y82X/hLK1wfvK213hFZFaQ2Gmy26PYRqO8agAuBYXBI1ve0uutuPZQt2CDg2ysBw0uT2Z6d85a7WP4jHhkQLctI1RpULcrdhH3hxl1YHfI3rsNd31g1W1id5ibjPeOvnB6irYnXTn2y+iInqY5RqD5WkLbQXtgm4p7cieMEMUxiLJ9oKOB9JC201+E+cDxaDeO7p3yBk9njvXy7b8othINbayj8nrI220vwepleKLbw3la2mYleYpsNIvG2yPhEYdpk5hcpUVadyqgC+7nmNe/TSNNMKDcC+XEHjnpBbYVFs20T8MQbQPwmUqhb5genhGbqmxI75SZKNB98J4RVxPYZndxTbgbfU/xJkprdTwyuL8sj8o2LAaNJTxIhEocJRI4k2J43uCMteR+cvF0miDtCJLYs6dOhlHbI/wAO3ImVW1H3atxy43+kO6OPeiD2wHbo/E8IrJ9qGx+5huxMa1SqFci26bWFsx/ZmhFFOzWYFGINwbHmMjPQMGiuiseKg+YvDwy5KmBljWzqlGmBr6wOoq9kKbDrB2wy8oxgICqsOFvIQV2HZ5CG1MOIK+HEUxiBalXt+UHqVzz+UJqYcQWphxFSDQM9c8/QSF6/b6CTvhhB6mGEUxiImxB+KMOJPxHzithhIWw8WwlQpxB+I+ZjPvH9R8zGth4w0BIiyQV/6j5mPWt/UfMyDqRDdnUAaifqHpnGRBei82bhQaak71zc+8Rxyh6rYWH7/OLOmxKkZG7FnRJ0soD6LNel4yHb49sd07okfw2HIx3SDVfGLmvoGx+4HwOFurORkLAfWafo+29TIv7pt4EXH1lM46uioPK57znJ+iGLvUqrzVWHgSD8xF43xyJDpxvG2X9RDzg7qYZUkDiamZEBVFMGqAw5xBqgi2GgCoDBqgMPqCDuIpjEV73kFS8OqLIHESxiAWBkLq0NYSJothATK0YaZhjCRESIsgWkectdiUgHv2GBLCcDilSoN4gZEx+JbFzejRRZXNtmiPzX7hIzttOCuf8A6ma1F+jLaLadKr/xVjpSb0nS+EvRXJEPQ2rdG75a42mGdTrY6c5Q9EqDJQ32y3zcD+nn4w7E43daZ+dpI2rFuwTpJtC5sDpKjZW1TRxFJgbDfVW7VYgMD5+kF2liLsTKbFVCSANbi3fwiP5cjcoLhxPeHBkDkybCvvIpPEA+JF4jib2cUCqP2QarUh1SA1Dna3jFsNAlSrBnrybaGJSmLuyqOZIA9Zlcf0wwy6Ev+lcvM2i5Bc0u2Xj4gQapiRMjX6cL+WkT3sB8gYLU6aG9jRtbUb//AExTTLWaHs2D4iRNiOyZqh0wpH3kZe3Ij95dYLadGr7jg9mh8jnFNMbGcX0yZqx5SMs0JsJ1pEGQKjHjGnZzCoHbNSRYdloUMoKu3EcKDkQdeEfiklJWBOMpRfFGqpUaSgeyPKPA5L6SNCCAbjTKGU9J0jDRDduUWTkzpCUUuLrBKaKuQCKB3WFpm8VjTLaq+/Qptzpqcv0i8zWMQ3nLn2djFVA9areS7HwwZ98/l0Hbz8IK1A845KrU0bdNmAJB7s4IyVtOj2fYFcNQTPRQD3jKGPMZ9nLGvhUq77K6uyva1nAa4DKctDa+vbNm83J2jkSVSaBqpmE6X9MBQJp0rNU0JPuofqfl6S96abWNCj7B/Ec7qdnNvD5kTxfHIwYhgQwOYOt+2BIRkyNaQzaO0KlZt6o5Y8yfkOA7oHnC8BhlqOEZ9zeyDWuL8L56Ta7M2P7BpV0VwvuPzXlfUEQGLhFsoOjmx6NYhusJKkFqZAGnbfMQnpVsiipNVmZS2W6oB3mtwlmmyzhg/UWJc6ubBANBkPazJg7YOrWTq67I2YIdD7Vx2WtpcXi29j1HVUYIISbAE9mpjErEG4JBGhBsR3GeibQ2Val1VEKgbJm4hePaxOkwW1KNNHKUyWC5FjbNuNgOAlp2U4cTVdGekpcilVOZyV+Z5N29s1q3nkeDoM5O7+UFieQHGel9Hcf11BGPvW3W7xkT46+MXONdGnDNvTCdqYgU6TsTb2TbtNshMZh681XSJb0G0vkATw3iAfSZPDYaxu2gIvblK43o3YpqMW2emdGlY4dN7jcj9JOUvEqAZTJ09vYNlUdaU3QBYZWsNJIuPwZ/9UfFp1IKopHKm7k2alqonTOo9A6Yr/8AQnQgbKjofWNTAqG1R6iHu3t4ejCQYylYyT7NqZOFqk6dcbeCi/0hG0EzM5uU6mFlPaQOt8ucLKwarFGlG8+y3D9VRqpvb34m9pa11A/5ZtHnnf2e4xlarYFgFUso96wJF1HEi+nHvnoNOsrqGU3B0P8AHAzZjdxRy88eORo846bsa2OpUBwC37LneY/6QI3pN0Z691dGVMrOSNbe7kNTr6Qjb1d6OOquuGqVXZUCMLhANxbi9ssxn3Sn2x0gx1FN+pTpKG9lQCSwJBtxzlsw6t2Zjbux1w7BRVDufyBSDnxOZjxtTEsoBqlVVN4lcm3BkGLa3JyHPWVtBy5rOSS/Vs1zrckKT5MZa1qV/vKLxpUWQc0QC9vKLZI/gl2Th8M+719Qu7WsGLgZ6AMfePjJNt7PwSncF1qWuBTDuRyJUXk1DYlI01q79Vhuq4G9vZgA5LbwtEfZNKuz1W6wbxGRulgoA01tlFvsclrozVKtWUA06ri5ZLXJG+M7WbS407ZBsrD0XfdqlgWtukGym+lyRrDadIBUVf8AMxJdP0J+aVG0iLIRxNUj9O+d36y+ykbfA7Fp0lcKSd8WN7XAtp6yPoSCi1aZ1R8/Ea+kzuzsY7rdsWUYZBWtawtYm+s1nRyhUG+1RkZmK5pyAyvlrnFtV2Px7kqO6X40U6K3/M4HkCfpKPZmNDrJen6VCqGxKKTpoMhm3Lj5dspOjWbEQklxs0xk1KjTIFPAR/UIfyiDsltJraWzMOKKO9xvAZ35woRsOT8UZgYOl8InS023gBSK7hNmHGdLdp0CqZY9AmH3Nh/xX/2rF2iIN9nQvh6o/wCJ81hO0UgZOhmLspqkFdSe6F1KYvnO7opGkt/s8qbuMt8VNh5Wb6T05hPKOi9QJjKLHTeK/wCpSv1nq5mvC/pOd8tfuWYfpvSqhwVxSUKZXMNYNcHMqTnxHGeW7eanvAU6z1RnvM9/evwvPYenOCpvQ6ypSNXqjvBVJBzsDpqND4TyDpFTe6M1BaAIIRVFrgHU9uY1tDkcyaqQFsZ/xlW1w/sMOauLH538JZUK5VKFTVkqmhf4k4elxIdm4Uhae7lUrsyK3wU199l/qN7SalUUIa27+FQO5Qp83P527eP/AGi2SJK2I6t6uHNNqtENcBQSyBrNlbhc9kHxuJ3KZSjSemjkB6jggm/C58Zq+juzSiGo5vUq2Zzy5KO68I2ts9KtNkbQjXiDwIim9mhRdGIxtxUrBcuqobtMcgQLkeZlFtcWZbe71aBTzFs/UmXVRm3HYn8XDHd3/jW9rNz4yCvgTUD00XRUqovwF/eQE8CL5QloordlMBvb1HrRYXte6jPMWH92noHRWjTFC9NWVXJazanhf0mG2Zhaivub5pVTbdVgQG7zpPTcMu6oBNyALnmeJgZGPwR3YPi03msdN2xHA35zMVNjjD1t5Pcfh8J5DsmhXFBnfle3ll84u0aX4d9Rr2jlFRbtnRlDSspWOc0asStMZkbungJmWM0uHZlp0mBAuAI+BMX3ibaYmnTJ5fSdE2296aE6xZMnYpdv/ST7OP8Ay9X/AOQf7YVtEZmA/Zx/gVv1r/th+OGZkl0VjeylqpGCT1ZGFiTSmSYBrVqROgqJfu3heerYZHUlWO8o9xr+1+lhxt8XHjzPkhNs+Wc9ewdcVKaONGUN5i81YHpoxfLW0xtZbieVY7BUsJi/xy9Vqm8bsoZFS+RNwSSLajSer1JQdJNlfeKTIG3GIIVxqNLjnY2F4yRhnG+jzXpbt3Dt1fUtvVKbhlKj2QOIJ4gjgJWIUYFL2o4k7yH/ANqsNVPZf0jMbsPqK1TrAwp0bElhY1CclC9jG/hG1MKxSjQ/zKtTrm/oUiw7srnwi2It2ajo1tIspo1MqtL2WHMcGHpJukG0xQpltWOSr8THQSo2avWY53X3aa7hPxNpb5+Uf0zoNu06ozFJwSOw2z9B5xLWzSm+JnqyhQabG9vxsQeZ1WmPG0G2d0gNJnLpcubmxsRlYDuAh2LQdaSf8PEpYHk1hb1t5wbA7KNVldgo6tilbe90hRYHvtl5GFqtgq70XuwqDVqhrOibosaTDM5gggnjbt4zQ4h7Ke6RbMSmKailbcAsLG4y1z45yLadSyMeQMS3bN2JUigwWJAv3mGHaHsMp0IPgZTYSkzD2fnBmxgIYZ3zU34cDKUdnQlOPGmTNiGb3Rlzk/3iuQlMtYE+zyiUclEKbFU70Q4yVhc9mcbH0ZLppgeJrVbmmXvuxYXt9qf3kGmbqyzpctOgU72a/oHhWTCMxFt9yy9qgAX8wYRjRnL3dWmqoosoUKo5W0lJtAa8IT6Kj2UdfWRKZJiASdJEBEmhEhnpPRSpvYWl2Ar/AKWInmyzfdBql8Nb4XYedj9Y7C9iPkr6S9cwWtC6ggdZY9mFFNtnZdOum5UW4uDyII0IImVxXR10q16yMGZ0IpjQqbZC5NrZCbWsDAqxPKLkXwTMn0X2a1GjZ1KuWJa9idbDMdgEL2lht9GW195SPMS0qE8oNUJ5REmMjBJUZbA9HD1VNKxzRt4bp77C9u2XJw62tYWOotke+EPeQssW3Y2MEuhgIUWAsBoBpK/aqk027reeUsd2V+1nslubAfX6SDYK5JFXh6W7w0GczOIYdfVA538xnNglcbrA8RrPP6NYtVdviJPrGQ2mw8zppGgwb3URm0COeYOkK2RUpmiVKnfv70qsfQ3WJhqKqxLm7oker7amdAOtzE6Aw0z3Lrt9LH3lyP0Mq6ta/st73A8/5kmKcqd9c+Y5iB4plqC409R/MXzGKIDi1I4X7oA9Ucz3QipUYZMe5ufYf3glep8Q8ZdhDlxJE3n2c4jeSqOTqfMfxPODWXhNV9m20lTEPSOXWrl+pLm3kT5RuF/UJzpuDPSngtWEvBqs1MwICrQKsIbWgVWKkMQHVgrwmtBSOczyGogqSBpNUMgaAGhjTNdL8Z1aobXu/wBDNIZhenuKBZKfIbx8ch9YcY2yOXHaK3GdISVKqtiRa54SowTe1IGEfg/fEeoKMaQtzcpJs33QivQAqip73DulNtfGUWLBCTe8F2dX3WYcxAalIhiQJKjxLqXIiRs4s7qjrFgMNHsIrWyOkFrIQd5fEcD/ADJqyyBntMSZroFquGHzEqsRWKaZjlxHdDsaeK6/PvlTVrX/AGjIkYu+rZwzY+IFCtTqj8jAntGhHkTKh1sbjxHOTq4tcQ06dg9qme60MWroHU3VgCCOR5xKhvPK+jHSx8L7DXakT7vFe1f2m+w+06NZN+i4PMDUfqXhNqkpKznTxuD/AAFVoFWEhXaBOWXnFqu1r7p8LQWikQVYJUi1sV/SfKCVMUeCn0meQ5CvIHaRvUc8hAsZiEpi9R/D9hAoMnq1xYm9gNSeU8025i+uqs400X9IyEs9vbdasNxPZT1bv7OyUMbFUC9gzCPwo9oRxWSYUWaMvQFbDMNh2epurkY3F4d0OZkuBxYp1d46WiY3F75JAlxiuN+S5Sly10V6Pc2iziLG86U4lqZ7BUMArtCqrSuxLznJG8AxFSV9cXzGsKxBgbGOiC2QmpB6lfcueHEftJqq8fOZ/aGM3zl7o07e0xsI2JyZOKDau2fhXxP7QQ7Tq3uHZT/SSvygV40tNCil0ZJZJS7Yam1Kym4q1Aee+37zX7C+0utSUpXXrhwYEK47+DTARQphgHpNT7SKR/yH81/eNw/TF628UohVX3mZ9PADOefURYgkXA4HjLzaVSnTolUI3qtiwXQDlFSimMjKthu0ellVmIVwF5qPqZWNULm5YseZN5SmSUa5U5GT/n6LWQsnSQskmo1d8X48opgB9g0ekeacjKyyDm1jrQbrfasYUsIFkTLOkrLOlgnplZ5WYloZXeV1dpzoo6LBKpgzwipAsbXCKWPAeZ4COigG6KnbeMt+GNT73dylNHO9yScyTcxN6bIxpUc+cnJ2IEMkGH5+sjNcxhqGECEWUanyiGuBoPGDXM4LLog56pMQNOtEtIQcY28UTmEhZNhKxVhaW7i8rNmUrv2CWziKn2Nh0QRrSQyNhACAqqe1eFKeMg3vbtzj72MMoLXMRJHRaxiyA0b6q0BqtCasDqzCjeyCoZm+kOKuwQcMz3nQeXzmhqTEYhiXYnM7x+c04VbszZ5UqGFjEtHxRNRkGBYoSOEUSiDbTjHyXCUwzAEZSm6VhJXoH3coTQ2bVf3UY+E2eztn0lFwgv5/OXOEUX0mKXzP6o3R+Fq5Mw+G6I4ltQq95ljR6DMfeqjwE2keIp/JyPyNXxca8GbwnRBaYt1jHwElbo0nxt6TRrGvFvNP2GsMPRmG6NL8Z8hK/aOxer3bNe99d0W05nPWbNoNXpqdQD3gGFHNJPbI8MWtIwLbEe+8SozIsWAIsL8/CD18LUtcKD2hlI8M++eh9Up1VT4CK2HT4V/0iNXyX5Qp/GXhnmm8dDkflOno5w6abi27hOhfqV6B/Sv2f//Z",
          coffee_price: "6000원"
        },
        {
          id: 9,
          coffee_kind: "frappuccino",
          coffee_name: "다크 모카 프라푸치노",
          desciption:
            "다크 모카 프라푸치노, 에스프레소 휘핑, 자바칩, 통자바칩, 카라멜 드리즐",
          coffee_image:
            "http://mblogthumb4.phinf.naver.net/20150624_215/aod0609_1435103783716hsyeW_JPEG/NaverBlog_20150624_085623_03.jpg?type=w2",
          coffee_price: "6800원"
        },
        {
          id: 10,
          coffee_kind: "frappuccino",
          coffee_name: "바닐라 크림 프라푸치노",
          desciption:
            "바닐라 크림 프라푸치노, 헤이즐넛 시럽 2, 카라멜 시럽 2, 바닐라 시럽 1, 카라멜 드리즐(많이), 일반 휘핑(많이)",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F99E260355BDFAB4F24EAE3",
          coffee_price: "6600원"
        },
        {
          id: 11,
          coffee_kind: "frappuccino",
          coffee_name: "더위사냥 프라푸치노",
          desciption:
            "에스프레소 프라푸치노, 카라멜 드리즐(많이), 에스프레소 휘핑",
          coffee_image:
            "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/69833197_551566532049555_9085711651689098154_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=103&se=7&oh=bb0065719925b071f92578431ddf544a&oe=5E3A3D04&ig_cache_key=MjEzNjAyNzA5Nzk0NDk2NzQ5Nw%3D%3D.2",
          coffee_price: "6300원"
        },
        {
          id: 12,
          coffee_kind: "frappuccino",
          coffee_name: "체리봉봉 프라푸치노",
          desciption:
            "딸기 크림 프라푸치노, 자바칩&토핑(반반) 5, 헤이즐넛 시럽, 카라멜 시럽, 일반 휘핑",
          coffee_image:
            "https://scontent-cdg2-1.cdninstagram.com/vp/d6965b0430d57ce6cffa1753b4c8c906/5E2B8130/t51.2885-15/e35/54247838_897080343967974_5742338633883192301_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=106&se=8&ig_cache_key=MjAxMzc4ODU5MDYwMjk2NzU4Mg%3D%3D.2",
          coffee_price: "7300원"
        },
        {
          id: 13,
          coffee_kind: "frappuccino",
          coffee_name: "하겐다즈 녹차 프라푸치노",
          desciption:
            "하겐다즈 녹차 프라푸치노, 두유, 에스프레소 휘핑(많이), 그린티파우더 9, 프라푸치노용 시럽(라이트), 바니라 시럽(없이), 돔리드",
          coffee_image:
            "https://postfiles.pstatic.net/MjAxOTA0MTRfMjYy/MDAxNTU1MjIwODg4ODI3.shfeh5G1FfOsg3xOSsX4En8JvWzzaNWP0JwgFJmPr6og.hZU0YaQZjdmTMVLdbZsLUCg350ZAPiO3prMcToViTRQg.JPEG.huaf/SE-912dce55-b7c9-4b1f-bd02-6045e7a45e16.jpg?type=w773",
          coffee_price: "6300원"
        },
        {
          id: 14,
          coffee_kind: "frappuccino",
          coffee_name: "오레오 프라푸치노",
          desciption:
            "바닐라 크림 프라푸치노, 에스프레소 휘핑, 모카 드리즐, 자바칩 2",
          coffee_image:
            "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F277E214F58CBB82A12",
          coffee_price: "6000원"
        },
        {
          id: 15,
          coffee_kind: "frappuccino",
          coffee_name: "초코하임 프라푸치노",
          desciption:
            "화이트 초콜릿 모카 프라푸치노, 에스프레소 휘핑, 자바칩&토핑(반반)",
          coffee_image:
            "http://postfiles14.naver.net/MjAxOTAzMjdfOTMg/MDAxNTUzNjgxNjg5OTI1.TOSDzjRwrJWUSKJiHStMDwkFFeHClSzeRq9LTgIsQsQg.OpGltN2sR_nsuG_yu4kVt4CXZiCxrw_J6niEuyAHrZMg.JPEG.whatisthebox/KakaoTalk_20190327_191410507.jpg?type=w773",
          coffee_price: "6300원"
        },
        {
          id: 16,
          coffee_kind: "frappuccino",
          coffee_name: "와일드바디 프라푸치노",
          desciption:
            "화이트 초콜릿 모카 프라푸치노, 에스프레소 휘핑(많이), 화이트 모카 시럽 5, 자바칩&토핑(반반) 7, 토핑(많이)",
          coffee_image:
            "https://postfiles.pstatic.net/MjAxOTA0MTRfMTQ0/MDAxNTU1MjIwOTcyODY4.hnPtxkpzg7h4AaufL0QFsZZE11nLQgaRBFKl5rYTOGQg.czal9WSnJucJbpX8ipPArIS3Z4PKWNKpMhDLW9kyLrQg.JPEG.huaf/SE-6d317124-423f-4479-a51e-97fbe83cec7f.jpg?type=w773",
          coffee_price: "6300원"
        }
      ]
    };
  },
  methods: {
    zoom(url) {
      console.log(url.id);
      this.selectedImage = url.coffee_image;
    }
  }
};
</script>

<style>
.image_HHY {
  width: 70%;
  text-align: center;
  margin: 0px auto;
}
.image_HHY img {
  width: 500px;
}
</style>