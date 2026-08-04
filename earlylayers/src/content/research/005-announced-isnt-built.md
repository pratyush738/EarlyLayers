---
record: 5
title: "Announced isn't built"
subject: "SBI Holdings — the integration thesis, revised"
date: 2026-08-04
status: published
sources: 9
summary: "Record 004 described SBI's tokenization activity as a vertically integrated approach. The documentary record as of July 2026 supported less: a small operating security-token market, a proof-of-concept L1, a live yen stablecoin whose settlement role had been tested only with a stand-in token on testnet, and a partnership announced in aspirational language. This record revises the characterization and documents how the desk came to publish it — the phrase was Startale's own, adopted without testing against the record. The revision is about our method as much as SBI's strategy."
position: |
  1. What stands. The Record 004 position and its 31 December 2028 criteria — regulated issuance, institutional customers, measurable adoption — are unchanged. Nothing in this record tested them. The revision is to the description, not the position.

  2. What doesn't. The architectural description. As of July 2026 the documentary record supported components at different maturities — one operating market, a licensed second venue of unconfirmed status, a proof-of-concept L1, a stablecoin whose settlement role had been demonstrated only with a stand-in token on testnet, and an announced partnership — not an integrated stack. "Vertical integration" was the subject's own phrase for its intent. We published it as our finding.

  3. The two claims, separated.

  The methods claim: Record 004 promoted an announced strategy into an operating architecture. This is settled by the chronology as it stood when Record 004 was written. No future outcome bears on it — convergence in 2028 would vindicate SBI's strategy, not Record 004's description of it. No date.

  The forward claim: Through 31 December 2028, I expect these components to keep developing as separate systems connected commercially — common ownership, partnership announcements, settlement pilots — rather than consolidating into a single production architecture. Falsifier: verifiable evidence by 31 December 2028 that ODX/START, Strium, and JPYSC settlement operate in production on a shared issuance or settlement layer, with the Ondo channel distributing assets issued on it.
---

## Opening

Record 004, published 29 July 2026, claimed that "the public record increasingly points toward a vertically integrated approach rather than a series of isolated partnerships." This record revises that characterization. The revision concerns SBI's strategy less than it concerns how this desk described it: the documentary record available on 29 July supported a narrower claim than the one we published.

## The chronology

The sequence below contains every dated fact the revision rests on. The dates carry the argument; the commentary that follows them adds nothing they have not already established.

June 2022 — ODX begins Equity PTS operations: off-exchange trading of listed Japanese equities. The operating history starts here.

December 2023 — START, ODX's secondary market for security tokens, opens for trading. ODX describes it as the first such market in Japan.

5 February 2026 — Strium announced. The announcement describes it as a proof of concept progressing toward commercial deployment.

26 March 2026 — Startale's Series A announcement: $63M total, including approximately $50M from SBI. The announcement uses the phrase "vertical integration strategy."

31 March 2026 — Per BOOSTRY's FY2025 market report, published 2 April 2026 and compiled from public information, START has 8 tokens trading with a market capitalization of approximately ¥33.6bn. BOOSTRY is a Nomura Holdings company and Nomura is an ODX shareholder; the figures come from a market participant, not a neutral registry. SBI's own corporate profile lists SBI Group holding 59% of ODX voting rights as of the same date, held through SBI PTS Holdings alongside SMFG, Nomura, Daiwa and Cboe.

15 July 2026 — SBI Global Asset Management, DigiFT and Startale announce the start of a testnet PoC covering subscription settlement and dividend payment for a tokenized Japanese equity fund. The Japanese release is explicit about its own limits: the PoC uses 検証用トークン — a verification token modelled on JPYSC's specification, not JPYSC itself — on Ethereum testnet, is technically separated from mainnet JPYSC, and 「新たなサービスの提供開始を意味するものではなく」 does not mean a new service has begun.

16 July 2026 — SBI announces the Ondo partnership. The Japanese release does not mention Strium or ODX. Its language is forward-looking throughout: the parties 目指します (aim to) provide tokenized Japanese assets on Ondo, and will 検討します (consider) using JPYSC for settlement and collateral. Products, customers, regions and timing are to be determined following regulatory procedures.

29 July 2026 — Record 004 published.

On 29 July, the record contained a security-token market that had been trading for two years and seven months, a blockchain announced as a proof of concept five months earlier, a settlement workflow demonstrated on testnet with a stand-in for the stablecoin rather than the stablecoin, and a partnership thirteen days old whose own release commits to aims and considerations. The phrase "vertical integration strategy" entered the record on 26 March, in Startale's funding announcement. Nothing between March and July converted it from a description of intent into a description of operations.

## What the record supports

Setting the process error aside, the documentary record as of early August 2026 places SBI's tokenization components as follows.

ODX is in production. Its Equity PTS has run off-exchange trading of listed Japanese equities since June 2022; START, its security-token market, has traded since December 2023, reaching 8 listings and approximately ¥33.6bn in market capitalization by 31 March 2026 per BOOSTRY's FY2025 report. A functioning, regulated, small market. It is not SBI's only tokenization venue: SBI Digital Markets, the Singapore subsidiary of SBI Digital Asset Holdings, was awarded a Capital Markets Services licence by the Monetary Authority of Singapore in September 2022, and announced a tokenized securities issuance and distribution platform built on Securitize, planned to go live that November. We have not established from any source that the platform is operating today, and do not assert it — the releases we have describe a licence granted and a launch planned.

Strium is a proof of concept, by its own announcement's description: progressing toward commercial deployment, not deployed.

JPYSC is issued; its use as settlement and collateral for tokenized securities has not been demonstrated on the live token at all. The 15 July PoC ran on Ethereum testnet using a verification token modelled on JPYSC's specification, technically separated from mainnet JPYSC, and its own release states that it does not constitute the start of a service. The announced-versus-built gap here is one step wider than the English coverage suggests: not a live token in a test environment, but a stand-in for a live token in a test environment.

The Ondo partnership is announced intent. The release aims to provide tokenized Japanese assets to global investors and will consider JPYSC for settlement and collateral, with products, customers, regions and timing to be determined. It does not mention Strium or ODX.

One reading connects the last omission to the rest. Per Ondo's own documentation, the issuing entity is Ondo Global Markets (BVI) Limited, a BVI special purpose vehicle whose tokens may not be offered or sold in the United States or to US persons, and are offered in the EEA, UK and Switzerland only to qualified investors or professional clients. That is an offshore distribution perimeter, reaching investors ODX as a domestic PTS cannot — which would make the partnership a channel around SBI's own market infrastructure rather than an extension of it. The entity structure is documented; the inference from it is ours. We mark the reading as one candidate explanation of why the Ondo release omits ODX, not an established fact, and note that SBI already holds a Singapore-licensed vehicle of its own.

## Sourcing disclosure

We also failed to distinguish Startale's own description of its strategy from an independent characterization. The phrase "vertical integration strategy" originated in Startale's March 2026 funding announcement and was adopted in Record 004 without first testing it against the broader documentary record.

Record 001 states this desk's refusal in one line: we do not restate a project's own materials without checking them against the record. That is the rule Record 004 broke.

The SBI–Ondo announcement was published on 16 July 2026, thirteen days before Record 004. It was public and in a primary source at the time of writing, and we did not consult it.

## Correction to our note of 4 August 2026

We wrote that the partnership "covers tokenizing Japanese assets for global investors." Against the release's own language — 目指します (aims to), 検討します (will consider) — that is firmer than the source supports. The release announces an aim and matters under consideration; it does not describe existing coverage. We repeated, at smaller scale, the error this record documents.

## Unverified

Four items we could not establish, stated rather than left implicit.

Ondo Global Markets (BVI) Limited's treatment under Japanese law. Ondo's own documentation establishes the entity and its jurisdictional exclusions; what we have not established is how a Japanese-asset token issued through it would be treated by Japanese regulators, or whether it could be offered to Japanese residents. The 16 July release defers all of this to 関係法令.

ODX's shareholder register. The 59% voting-rights figure is SBI's own disclosure; we found no confirmation from ODX's side.

SBI Digital Markets' current operating status. We establish the licence and the announced launch plan; we found no confirmation that the platform went live, and no issuance or volume figures comparable to the BOOSTRY numbers for START.

JPYSC's issuance date. Japanese coverage gives 24 June 2026 as the date SBI Shinsei Trust Bank began issuance, against other reports dating the launch to March; the likeliest reading is that March marks the announcement and June the issuance. We have not confirmed either against SBI Shinsei's own disclosure, and the record above does not depend on it.

## Sources

1. Startale, Strium announcement, 5 February 2026 — https://startale.com/en/blog/strium-announcement (also published at https://strium.org/blog/strium-announcement)
2. Startale, Series A announcement, 26 March 2026 — https://startale.com/en/blog/sbi-fundraise
3. SBIホールディングス「米国の大手株式トークン化プラットフォーマーOndo Financeとの戦略的提携に関するお知らせ」16 July 2026 — https://www.sbigroup.co.jp/news/2026/0716_16489.html
4. SBI Holdings, ODX group company profile — https://www.sbigroup.co.jp/company/group/odx.html
5. 大阪デジタルエクスチェンジ株式会社「会社概要」 — https://www.odx.co.jp/company/about/
6. BOOSTRY「【詳細版】国内セキュリティ・トークン市場総括レポート（2025年度）」2 April 2026 — https://boostry.co.jp/blog/st-market-fy2025j (BOOSTRY is a Nomura Holdings company; Nomura is an ODX shareholder — see the note in the chronology)
7. Startale Group / SBIグローバルアセットマネジメント / DigiFT「円建てステーブルコインJPYSCの活用を見据えた、トークン化日本株ファンドの決済・分配に関するテストネットPoC (技術検証) を開始」15 July 2026 — https://prtimes.jp/main/html/rd/p/000000025.000114522.html (the companies' own release, filed via PR TIMES)
8. SBI Digital Markets, SBI Digital Markets partners with Securitize to launch its Digital Asset Securities Issuance Platform across APAC under Singapore licence — https://sbidm.com/press-releases/sbi-digital-markets-partners-with-securitize-to-launch-its-digital-asset-securities-issuance-platform-across-apac-under-singapore-licence/ — and SBI Digital Markets awarded the Capital Markets Services Licence by the Monetary Authority of Singapore — https://sbidm.com/press-releases/sbi-digital-markets-awarded-the-capital-markets-services-licence-by-the-monetary-authority-of-singapore/
9. Ondo Finance documentation, Ondo Global Markets disclaimer and trust pages — https://docs.ondo.finance/ondo-global-markets/disclaimer and https://docs.ondo.finance/ondo-global-markets/trust-and-transparency
