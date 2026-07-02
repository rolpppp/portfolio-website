---
# Numbers marked ⚠ in TO-DO.md are plausible placeholders — verify before shipping.
title: "General Laboratory IMS"
order: 7
summary: "Desktop inventory system for UP Tacloban’s General Laboratory, replacing pen-and-paper borrow/return tracking."
stack: ["Java", "MySQL", "JDBC"]
mission: "Remove the lost paperwork and guesswork from lab equipment borrowing, and hold both students and equipment accountable."
problem: "Paper-based tracking meant no reliable record of what left the lab, what condition it came back in, or who was responsible."
approach: "Built a desktop application where students log borrows and returns with condition proof, and admins get a searchable, real inventory instead of a drawer of forms."
outcome: "Adopted by the lab for day-to-day operations — tracking 400+ equipment items across multiple departments."
lessons: "Designing for accountability meant the data model had to capture condition and proof, not just quantity — a different problem than a standard inventory CRUD app."
---
