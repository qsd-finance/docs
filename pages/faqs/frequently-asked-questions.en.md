# QSD Frequently Asked Questions

#### How is QSD different from other algorithmic stablecoins?

Whilst we took our inspiration from ESD, QSD is different in many ways. Here are the the highlights:

- 4 hour epochs

- Treasury buy back and burn yield farming strategy

- Implimentation of the Goldilocks zone ($0.98 - $1.00) : Expanion above $1.02, contraction below $0.98, 

- No lockups other than a 1 epoch delay between unbonding and withdrawing (which is in fact a security feature of the code)

- QSD bonding is only available when time weighted average price (TWAP) is below $1.02

- Separate governance token (QSG) that can be earned by bonding QSD when TWAP is below $1.02

- QSG can also be staked to earn further rewards, paid in QSD

- New functionality to make compounding of LP rewards easier

<br/>

#### How can I earn rewards?

You can earn QSD rewards by:

- Buying QSD tokens from Pancakeswap and bonding them on the QSD page at quantumset.finance (tokens can only be bonded when TWAP is below $1 and QSD rewards are only available when TWAP is $1 or more)

- Buying QSD tokens from Pancakswap, providing liquidity to the Pancakeswap pair and bonding the LP tokens on the LP page at quantumset.finance

You can earn QSG rewards by bonding QSD when TWAP is below $1. You can earn further rewards by staging and bonding your QSG tokens in the QSG page on quantumset.finance. Those rewards will be paid in QSD tokens.

<br/> 

#### By how much will the supply expand each epoch?

The supply will expand at a rate of 5.4% when TWAP is $1.10 or more. When TWAP is between $1.02 and $1.10, there is a proportionate sliding scale of rewards from just above 0% to 5.4%.

<br/>

#### How are rewards split?

During our bootstrapping period, rewards are split equally between those bonding QSD tokens and those bonding LP tokens.

Following the bootstrapping period, rewards are split as follows:

- 40% to bonded QSD holders
- 35% to bonded LP token holders
- 15% to the QSD treasury
- 10% to QSG bonding rewards

<br/>

#### Do rewards compound?

These will not autocompound. This is to encourage selling QSD rewards when TWAP is above the $1.02 peg.

LP rewards can be compounded at any time using the Single Supply option in the Provide section at the bottom of the LP page. This option will sell half of your rewarded QSD into DAI, add liquidity to Uniswap and bond your LP tokens through one click.

<br/>

#### What does bonded/unbonded mean?

If your LP tokens or QSD are showing in a bonded state, it means that you are earning expansion rewards as long as the TWAP is above $1. In the case of bonded QSD, you are earning QSG rewards when TWAP is below $1. You may unbond at any time but this will mean you stop accruing rewards. Once you have unbonded, you may withdraw your tokens 1 epoch later.

<br/>

#### What is an epoch?

An epoch is simply a block of time that the protocol uses as part of its mechanics. QSD epochs are 4 hours long. Rewards are awarded each epoch where applicable.

<br/>

#### Can I bond QSD while in expansion?

No, you can only bond QSD below peg while TWAP is below $1.02. However you can bond QSD:BUSD Lp tokens at any time.

<br/>

#### Can I add to my bonded QSD below peg?

Yes.

<br/>

#### What happens to the QSD in the treasury?

Treasury funds are used for 2 purposes: the first is for protocol development costs which is 25% of the funds, the 2nd is for the buy back and burn strategy which accounts for the remaining 75% of treasury funds.

<br/>

#### What is the treasury buy back and burn yield farming strategy?

75% of the treasury funds are earmarked for the strategy outlined below:
- Sell rewards to BUSD
- Deposit BUSD (+BUSD:QSD LP and QSD where available) to High APY yield farms on BSC
- Use the yield from these farm to buy back and burn QSD when price is below $98c
- The initial treaasury investment is never removed, ensuring constant buying pressure for QSD  

<br/>

#### What is QSG?

QSG stands for Quantum Set Governance and is a valueless governance token for the QSD protocol. It can only be earned when TWAP is below $1 and by users who have bonded QSD at that time. QSG tokens can themselves be staged and bonded to propose changes to the protocol in the DAO (Governance section on the quantumset.finance page), vote on proposals and to earn governance rewards.

The threshold for submitting a proposal is 0.9% of DAO ownership, ie. total QSG supply and the quorum for passing a proposal is 33%.

<br/>

#### Can I withdraw rewards at any time or is there a lock?

You can withdraw your rewards 1 epoch after you unbond. This 1 epoch delay is a security feature that helps prevent the protocol from being exploited by hackers and other bad actors.

For QSD bonding rewards during bootstrapping, you can choose to let the rewards autocompound or you can unbond a partial or full amount at any time. If you wish to unbond the amount you have earned each epoch, we recommend you keep a record of the number of QSD you initially bond so you can calculate the amount you wish to unbond each epoch during the bootstrapping period.

For QSD bonding rewards during bootstrapping, you can Poke to move your rewards to Claimable and withdraw them 1 epoch later.

For LP rewards (either during or after bootstrapping), you can unbond to move rewards to Claimable. We recommend rebonding your LP tokens to continue earning rewards.

<br/>

#### What about coupons and debt?

These features do not exist in the QSD protocol and have been replaced by our tresury buy back and burn yield farming strategy, as well as our below the peg mechanics that only allow entry for rewards on bonded QSD when TWAP is below $1 and QSG farming which can only take place below the peg.

<br/>

#### How do I contribute to the protocol and/or participate in governance?

When TWAP is below $1, you can bond QSD and earn governance tokens - QSG. QSG holders can submit and vote for proposals. Anyone can participate in community discussions in our Discord server and Telegram group.

<br/>

#### Who is the core team?

The team is a group of anonymous crypto investors and technical professionals. Feel free to come into our Discord and Telegram and get to know us. We are looking forward to meeting you.

