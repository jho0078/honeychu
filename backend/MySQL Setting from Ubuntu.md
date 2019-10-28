### MySQL Setting from Ubuntu

* 연결

```bash
$ ssh -i ./secrets/T0103B12.pem ubuntu@52.78.224.61
```

* 우분투 MySQL Server 설치

```bash
$ sudo apt install -y mysql-server
```

* MySQL 서버 초기화

```bash
$ sudo mysql_secure_installation
```

* 초기 설정 참고

```
https://hiseon.me/linux/ubuntu/ubuntu-mysql-install/
```

* MySQL 다시 실행

```bash
$ sudo /etc/init.d/mysql restart
```

-------------

### MySQL 계정 생성

* MySQL Server 접속

```bash
$ sudo mysql -u root -p
```

* 계정 생성

```mysql
CREATE USER '이름'@'localhost' IDENTIFIED BY '비밀번호';
-- 비밀번호 정책 확인
-- SHOW VARIABLES LIKE 'validate_password%'
```

* 접속 종료

```mysql
exit;
```

--------

### MySQL 외부 접속 허용

* mysqld.cnf 파일 수정

```bash
$ /etc/mysql/mysql.conf.d
$ vi mysqld.cnf
```

* bind-address 주석 처리

```
# bind-address    = 127.0.0.1
```

* MySQL 다시 실행

```bash
$ sudo /etc/init.d/mysql restart
```

-----

### MySQL Workbench와 연결

* SSH hostname : 우분투 인스턴스 네임 입력

![MySQL workbench 연결](https://user-images.githubusercontent.com/46305309/67652778-ce63e600-f989-11e9-86d0-56a737015f0e.png)

* Error 1044: Access denied for user (workbench 오류)
* ERROR 1227 (42000): Access denied; you need (at least one of) the CREATE USER privilege(s) for this operation (ubuntu mysql 오류)

> 해당 유저의 권한 제한으로 테이블 생성 불가 -> 최고 관리자인 root로 접속하여 권한 부여

```
mysql> show grants for semin@localhost;
mysql> sudo mysql -u  root -p
mysql> grant all privileges on *.* to 'semin'@'localhost' with grant option;
```

* check the manual that corresponds to your MySQL server version for the right syntax to use near 'VISIBLE,

> ubuntu MySQL  버전이 5.7과, workbench 버전 불일치 오류

```
Edit > Preferences > Modeling > MySQL
Deafult Target MySQL Version: 5.7로 변경
```

----------

### Ubuntu에서 npm start하기

* AWS 접속

```bash
$ ssh -i ./secrets/T0103B12.pem ubuntu@52.78.224.61
```

* git 설치

```bash
$ sudo apt-get install git-core
```

* git clone

```bash
$ sudo git clone https://lab.ssafy.com/s1-final/s1p2251012.git
```

* npm 설치

```bash
$ sudo apt install npm
```

* package 설치

```bash
$ cd s1p2251012/backend
$ sudo npm install
```

* npm start

```bash
$ sudo npm start
```

* 확인

```
ex) http://52.78.224.61:3000/api/starmenu
```

