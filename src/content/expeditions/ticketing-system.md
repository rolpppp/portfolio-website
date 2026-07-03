---
# Numbers marked ⚠ in TO-DO.md are plausible placeholders — verify before shipping.
title: "Support Ticketing System"
order: 3
context: "Internship — MYT SoftDev, production"
metric: "Same-day response"
location: "Cebu City"
coords: "10.3157°N 123.8854°E"
summary: "Ticketing upgrade with automated two-way notifications for clients and sales reps — same internship, second production system."
stack: ["PHP", "CodeIgniter 4", "MySQL", "Hestia CP"]
mission: "Make sure the right person is notified the moment a ticket needs their attention, instead of relying on someone remembering to check a dashboard."
problem: "Tickets logged without a notification loop just sat until someone manually checked — slow for clients and slow for the sales team responsible for the account."
approach: "Shipped email notifications to both the client and the relevant salesperson per project whenever a ticket was issued — in both directions — alongside data-load optimization and bug fixes."
outcome: "Same-day first response on client tickets, down from next-day, once notifications closed the loop for both clients and the internal sales team."
lessons: "A notification system has two audiences with different needs (client vs. internal sales) — the same event had to be communicated differently to each."
linkNote: "Proprietary — live client system, MYT SoftDev Solutions"
---
