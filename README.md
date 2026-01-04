# Polymarket_M3_Trading_Bot

The **Polymarket M3 (Multi-Model Meta) bot** is a specialized high-speed execution suite designed to replicate the trades of top-tier professional traders in real time. By monitoring specific **“Smart Money” wallet addresses** on the blockchain, the bot executes identical positions for your account within milliseconds of the target transaction.

![polymarket](https://github.com/user-attachments/assets/ae83f9f9-96ee-462d-9089-ea08ad05d7bb)

---

## Prerequisites (Step 1)

Before running the bot, you must have **Node.js** installed.

### Download
Visit https://nodejs.org and click **Download**.

### Install
Run the installer and click **Next** on all prompts.

### Verify Installation
Open a terminal or command prompt and run:

```bash
node -v
```

If a version number appears, you are ready.

---

## Installation (Step 2)

### Option A: Git Clone (Recommended for Developers)

```bash
git clone https://github.com/YourUsername/Polymarket_M3_Trading_Bot.git
```

### Option B: Download ZIP (Non-Developers)

1. Click the green **“<> Code”** button on GitHub  
2. Select **“Download ZIP”**  
3. Extract the ZIP file to your Desktop  

---

## Setting Up the Bot (Step 3)

### Open the Terminal

- **Windows:** Press `Win`, type `cmd`, press Enter  
- **Mac:** Press `Cmd + Space`, type `Terminal`, press Enter  

### Navigate to the Bot Folder

Type `cd` followed by a space, then drag and drop the bot folder into the terminal. It should look similar to:

```bash
cd C:\Users\YourName\Desktop\Polymarket_M3_Bot
```

Press **Enter**.

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

1. Rename the file `_env` to `.env`  
2. Open the `.env` file in a text editor  
3. Fill in the following values:

```env
COPY_ADDRESS=wallet_address_you_are_copy_trading
PERSONAL_WALLET=my_wallet_address_here
PRIVATE_KEY=my_private_key_here
```

---

## How to Get Your Private Key

### If You Use Email or Google (Magic Link)

1. Visit https://reveal.magic.link/polymarket  
2. Log in using your Polymarket email  
3. Click **“Reveal Private Key”**  
4. Copy the key starting with `0x`

### If You Use MetaMask

1. Open MetaMask and select your Polymarket account  
2. Click **Account Details**  
3. Select **Export Private Key**  
4. Enter your password and copy the key  

> ⚠️ **Never share your private key.** Anyone with access can control your funds.

---

## Starting the Bot (Step 4)

After saving your `.env` file, run:

```bash
node src/index.js
```

The bot will now begin monitoring the Polymarket CLOB and mirroring trades from the selected smart-money wallet in real time.

<img width="1343" height="548" alt="running" src="https://github.com/user-attachments/assets/c4749c15-57fd-43da-b0fb-cc381712cd2c" />

---

## Disclaimer

This bot is for educational and experimental purposes only. Copy trading carries risk. Always understand what you are trading and never risk funds you cannot afford to lose.

