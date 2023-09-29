# Starting Information
- This is a setup guide for Windows Subsystem for Linux (WSL)
- If information is *italicized* it's just extra helpful information
- If a piece of information is **Bolded** it means you need to replace it with something you picked
- If information looks like `this` then it means it's something you can directly type/copy into the terminal
- If you don't like reading or you already know what you're doing use the older setup instructions located at the bottom

<br/>
<br/>

# Installing Prerequisites
- Ensure you System is up to date on packages
	- `sudo apt update -y`
	- `sudo apt upgrade -y`
- Install Build Essentials
	- `sudo apt install build-essential libssl-dev -y`
- Install PostGres
	- `sudo apt install postgresql -y`
	- `sudo apt install postgresql-client -y`
- Install Package Config
	- `sudo apt install pkg-config -y`
- Rust
    - Download
        - `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
    - Install
        - Select `1` for the default installation option
    - Setup Terminal Environment Variable
        - `source $HOME/.cargo/env`
    - Test if it's working
        - `rustc -V` Should tell you what version of the Rust Compiler you have
		- `cargo -V` Should tell you what version of the cargo package manger you have

<br/>

# Setting up PostGres
- Start up Postgres
    - `sudo service postgresql start`
- Database Creation
    - `sudo -u postgres psql template1` 
	- `CREATE USER `**USERNAME**;
	- `ALTER USER `**USERNAME**` with encrypted password '123';` 
	- `ALTER USER `**USERNAME**` WITH SUPERUSER;`
	- `\q`
	- `sudo service postgresql restart`
	- `psql postgres`
	- `CREATE DATABASE p2boards;`
	- `\q`

<br/>

# Cloning the Repo
- Navigate to whereever you want the repo to be stored
    - Clone the git repository
        - `sudo git clone https://github.com/Alex-Marek/portal2-cm-boards-v2`
    - Set Ownership of the files
        - *If you don't know your username you can get it by typing `whoami` into a linux terminal*
        - `sudo chown -R `**YOURLINUXUSERNAME**` portal2-cm-boards-v2`

<br/>

# Import Testing Data into Database
- Download Example Database
    - Available [Here](https://drive.google.com/file/d/1PJRp_amgzV0y47O4N2k_qGRvIRi5AjGz/view?usp=sharing)
- Create the directory for the database
    - `mkdir portal2-cm-boards-v2/db/dbdump`
- Moving to the directory forthe database
    - `cd portal2-cm-boards-v2/db/dbdump`
- Put the contents of the file into the Database 
    - `psql p2boards < 2023.9.23_Pg_Dump.sql`

<br/>

# Setting up the Server
- Move into the server directory
    - `cd ../portal2-cm-boards-v2/server`
- Copy the file .env.example to a file named .env
    - `cp .env.example .env`
- Configure Database URL in the .env file *(Can edit by typing `nano .env` or `code .env` if you have VSCode)*
    - *Do not replace this with your linux username, it's the username you used for creating the database*
    - DATABASE_URL=postgresql://**USERNAME**:**PASSWORD**@localhost:5432/p2boards
	- Set STEAM.API_KEY (Technically not required) can get one [Here](https://steamcommunity.com/dev/apikey) 

# Fin
- Running the Frontend
    - To run the frontend open the `board-portal-2` directory in your terminal and enter `npm start`
- Running the Backend
    - To run the backend open the `server` directory in your terminal enter `cargo run` 

<br/>
<br/>
<br/>

# Older Copy Pasteable setup.instructions
```
sudo apt update -y
sudo apt upgrade -y
sudo apt install build-essential libssl-dev -y
sudo apt install postgresql -y
sudo apt install postgresql-client -y
sudo service postgresql start
sudo apt install pkg-config -y
sudo -u postgres psql template1
CREATE USER ubuntu;
ALTER USER ubuntu with encrypted password '123'; ALTER USER ubuntu WITH SUPERUSER;
\q
sudo service postgresql restart
psql postgres
CREATE DATABASE p2boards;
\q
sudo git clone https://github.com/p2sr/portal2-cm-boards-v2
sudo chown -R ubuntu portal2-cm-boards-v2
cd portal2-cm-boards-v2/db/dbdump
psql p2boards < 2022.2.3_PG_Dump.sql
cd ../portal2-cm-boards-v2/server
cp .env.example .env
# Edit the .env and remove the first line
# Change the DATABASE_URL to follow this basic structure:
# DATABASE_URL=postgresql://ubuntu:123@localhost/p2boards
# Edit proof values
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Select 1 for default installation
source $HOME/.cargo/env
cargo -V
rustc -V
cargo run
```