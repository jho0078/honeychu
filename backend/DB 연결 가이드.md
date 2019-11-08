### DB 연결 가이드

-----

* config.json

  ```json
  "development": {
      "username": "root",				// workbench username
      "password": "1234",				// password
      "database": "honeychu",			// database name
      "host": "localhost",			// 연결할 주소
      "dialect": "mysql",
      "define": {
        "timestamps": false,
        "underscored" : true
      }
  },
  ```

* Workbench

  * Open EER diagram
  * Forward
  * Set as Default Schema
  * Import csv

* Sequalize Auto

  ```bash
  $ /backend
  sequelize-auto -o "./models" -d honeychu(database이름) -h 52.78.224.61(address) -u semin(username) -p 3306(port) -x 1234(password) -e mysql(사용db)
  ```

* API

  * get

    >`/star/menu` : 등록된 모든 메뉴 조회 (basic + custom)
    >
    >`/star/menu/:id` : 메뉴 상세 정보 조회
    >
    >`/star/menu/basic` : 등록된 기본 메뉴 조회
    >
    >`/star/menu/custom` : 등록된 커스텀 메뉴 조회

  * post

  * put

  * delete