import React, { useState, useEffect } from "react";
import ContentCard from "./ContentCard";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/product";

const data: Product[] = [
  {
    category: "Baby Food",
    brand: "Plum Organics",
    owner: "Sun-Maid Co-op",
    ownershipType: "Co-op"
  },
  {
    category: "Baby Food",
    brand: "Cerebelly",
    owner: "Dr. Teresa Pursner & Nick Langan",
    ownershipType: "Female founder owned",
    additionalNotes: "Dr. Pursner is a practicing neurosurgeon PhD in developmental neurobiology from Stanford and mom of three"
  },
  {
    category: "Baby Food",
    brand: "Serenity",
    owner: "Serenity & Joe Carr",
    ownershipType: "Family owned"
  },
  {
    category: "Baby Food",
    brand: "Once Upon A Farm",
    owner: "Jennifer Garner & John Foraker",
    ownershipType: "Founder owned"
  },
  {
    category: "Baby Food",
    brand: "Tiny Organics",
    owner: "Sofia Laurell, Betsy Fore, Carolyn O'hare",
    ownershipType: "Female founder owned",
    additionalNotes: "Big on subscription model"
  },
  {
    category: "Baby Food",
    brand: "Amara",
    owner: "Jess Sturzenegger",
    ownershipType: "Female founder owned"
  },
  {
    category: "Baby Food",
    brand: "Yumi",
    owner: "Angela Sutherland & Evelyn Rusli",
    ownershipType: "Female founder owned"
  },
  {
    category: "Baby Food",
    brand: "Little Spoon",
    owner: "Lisa Barnett, Angela Vranich, Michelle Muller, and Ben Lewis",
    ownershipType: "Founder owned"
  },
  {
    category: "Baby Food",
    brand: "Baby gourmet",
    owner: "Jennifer Carlson and Jill Vos",
    ownershipType: "Female founder owned"
  },
  {
    category: "Baby Formula",
    brand: "Kendamil",
    owner: "Kendal Nutricare",
    ownershipType: "Family owned",
    additionalNotes: "Owned by the McMahon family- brothers Dylan and Will and their dad Ross"
  },
  {
    category: "Baby Formula",
    brand: "Bobbie",
    owner: "Laura Modi & Sarah Hardy",
    ownershipType: "Female founder owned",
    additionalNotes: "Legit as hell. New company, full of energy and advocacy"
  },
  {
    category: "Candy",
    brand: "Ferrero",
    owner: "Ferrero Group",
    ownershipType: "Family owned",
    additionalNotes: "Owned by the Ferrero Family, super secretive and mysterious"
  },
  {
    category: "Candy",
    brand: "Butterfinger",
    owner: "Ferrero Group",
    ownershipType: "Family owned"
  },
  {
    category: "Candy",
    brand: "Kinder",
    owner: "Ferrero Group",
    ownershipType: "Family owned"
  },
  {
    category: "Candy",
    brand: "Smarties",
    owner: "The Dee Family",
    ownershipType: "Family owned",
    additionalNotes: "Run by the three granddaughters of the founder"
  },
  {
    category: "Candy",
    brand: "Roca",
    owner: "Brown & Haley",
    ownershipType: "Family Owned",
    additionalNotes: "Fifth generation family owned since 1940's"
  },
  {
    category: "Candy",
    brand: "Merci Chocolate",
    owner: "Axel Oberwelland",
    ownershipType: "Family Owned",
    additionalNotes: "Son of founder August Oberwelland currently runs and owns it"
  },
  {
    category: "Cereal",
    brand: "Panda Puffs",
    owner: "Nature's Path",
    ownershipType: "Founder Family Owned"
  },
  {
    category: "Cereal",
    brand: "Magic Spoon Cereals",
    owner: "Magic Spoon",
    ownershipType: "Founder Owned"
  },
  {
    category: "Cereal",
    brand: "Forager Project Cereals",
    owner: "Forager Project",
    ownershipType: "Founder Owned",
    additionalNotes: "Danone has purchased a minority stake in the company"
  },
  {
    category: "Cereal",
    brand: "Catalina Crunch Cereals",
    owner: "Catalina Crunch",
    ownershipType: "Founder Owned"
  },
  {
    category: "Cereal",
    brand: "High Key Cereals",
    owner: "High Key Snacks",
    ownershipType: "Founder Owned",
    additionalNotes: "AJ Patel is the founder and he is a serial entrepreneur"
  },
  {
    category: "Cereal",
    brand: "Ezekiel 4:9 Cereal",
    owner: "Food For Life",
    ownershipType: "Founder Family Owned"
  },
  {
    category: "Cereal",
    brand: "Erin Baker's",
    owner: "Erin Baker's",
    ownershipType: "Founder Family Owned"
  },
  {
    category: "Chocolate",
    brand: "Wicked BOLD chocolate",
    owner: "Deric Cahill & Brooklynn Cahill",
    ownershipType: "Family founder owned"
  },
  {
    category: "Chocolate",
    brand: "Unreal",
    owner: "The Bronner Family",
    ownershipType: "Family owned",
    additionalNotes: "Started by two teenaged brothers and their father"
  },
  {
    category: "Chocolate",
    brand: "Tony's Chocolonely",
    owner: "Henk Jan Beltman",
    ownershipType: "Founder owned",
    additionalNotes: "Minority stakes taken by Verlinvest and JamJar, both private equity partners"
  },
  {
    category: "Chocolate",
    brand: "K'Ul",
    owner: "Paul Newman and Ari Lee-Newman",
    ownershipType: "Founder owned",
    additionalNotes: "Not the Paul Newman of Newman's own. This company seems very invested in advocating for worker and farmer rights"
  },
  {
    category: "Chocolate",
    brand: "Chocolove",
    owner: "Timothy Moley",
    ownershipType: "Founder owned"
  },
  {
    category: "Chocolate",
    brand: "Chocolate Necesities",
    owner: "Kevin Buck",
    ownershipType: "Founder owned",
    additionalNotes: "My hometown chocolatiers!"
  },
  {
    category: "Chocolate",
    brand: "Magic All-one chocolate",
    owner: "The Bronner Family",
    ownershipType: "Family owned",
    additionalNotes: "This is Dr. Bronner's chocolate brand"
  },
  {
    category: "Chocolate",
    brand: "Beyond Good",
    owner: "Tim McCollum",
    ownershipType: "Founder owned"
  },
  {
    category: "Cheese",
    brand: "Rumiano",
    owner: "Rumiano family",
    ownershipType: "Family owned"
  },
  {
    category: "Cheese",
    brand: "Sargento",
    owner: "Gentine family",
    ownershipType: "Family owned"
  },
  {
    category: "Cheese",
    brand: "Cacique",
    owner: "Cardenas family",
    ownershipType: "Family owned"
  },
  {
    category: "Cheese",
    brand: "Organic Nuna",
    owner: "Jeff Lichtenstein",
    ownershipType: "Family owned"
  },
  {
    category: "Cheese",
    brand: "Polly-O",
    owner: "Auricchio family (Bel Gioioso)",
    ownershipType: "Family owned"
  },
  {
    category: "Cheese",
    brand: "Frigo",
    owner: "Saputo family",
    ownershipType: "Family owned",
    additionalNotes: "One of the largest producers of extended shelf life dairy products in the world"
  },
  {
    category: "Chips & Snacks",
    brand: "Juanitas",
    owner: "Dominguez Family Foods",
    ownershipType: "Family Owned",
    additionalNotes: "Based in Oregon"
  },
  {
    category: "Chips & Snacks",
    brand: "Juantonio's",
    owner: "Dominguez Family Foods",
    ownershipType: "Family Owned",
    additionalNotes: "Based in Oregon"
  },
  {
    category: "Chips & Snacks",
    brand: "Cretor's Popcorn",
    owner: "C. Cretors & Co",
    ownershipType: "Family Owned"
  },
  {
    category: "Chips & Snacks",
    brand: "Unique Snacks",
    owner: "Unique Snacks",
    ownershipType: "Family Owned"
  },
  {
    category: "Chips & Snacks",
    brand: "One Mighty Mill",
    owner: "One Mighty Mill",
    ownershipType: "Founder Owned",
    additionalNotes: "Founded by John Olinto"
  },
  {
    category: "Coffee",
    brand: "Black Rifle Coffee Co.",
    owner: "Evan Hafer",
    ownershipType: "Founder owned",
    additionalNotes: "Veteran owned. Hafer was a green beret for 15 years"
  },
  {
    category: "Coffee",
    brand: "Newman's Own",
    owner: "Paul Newman & Family",
    ownershipType: "Founder family owned",
    additionalNotes: "100% of profits are donated to charity"
  },
  {
    category: "Coffee",
    brand: "Death Wish Coffee Co.",
    owner: "Michael Brown",
    ownershipType: "Founder owned",
    additionalNotes: "4x as strong as regular coffee due to bean selection and roasting"
  },
  {
    category: "Coffee",
    brand: "Landmark Coffee",
    owner: "Landman Family",
    ownershipType: "Family owned",
    additionalNotes: "Founded by Carl Landman now run by his son Jim"
  },
  {
    category: "Drinks",
    brand: "Guayaki",
    owner: "",
    ownershipType: "B-corp",
    additionalNotes: "Sends lots of money to rainforest rehab"
  },
  {
    category: "Drinks",
    brand: "Cascade Ice",
    owner: "Mike Broadwell & Mark Christensen",
    ownershipType: "Founder owned",
    additionalNotes: "Owned via Unique Beverage Company"
  },
  {
    category: "Drinks",
    brand: "Arizona Iced Tea",
    owner: "Don Voltagio",
    ownershipType: "Founder owned",
    additionalNotes: "His story is funny and pretty wild"
  },
  {
    category: "Energy Drinks",
    brand: "Red Bull",
    owner: "Mateschitz & Yoovidhya families",
    ownershipType: "Family owned",
    additionalNotes: "I don't know what to make of this"
  },
  {
    category: "Energy Drinks",
    brand: "Bucked Up",
    owner: "Jeff & Ryan Gardner",
    ownershipType: "Founder family owned",
    additionalNotes: "Founded by twin brothers. These guys are social media marketers, not nutritionists"
  },
  {
    category: "Energy Drinks",
    brand: "Green Dragon",
    owner: "Unique Beverage Co",
    ownershipType: "Founder owned",
    additionalNotes: "Same company that makes cascade ice"
  },
  {
    category: "Energy Drinks",
    brand: "Hi-Brew Coffee",
    owner: "David Smith",
    ownershipType: "Founder owned"
  },
  {
    category: "Energy Drinks",
    brand: "Ryse",
    owner: "Noelle Deysel & Nic Stella",
    ownershipType: "Foudner owned",
    additionalNotes: "Awesome guys, legit AF. Support them"
  },
  {
    category: "Frozen Pizza",
    brand: "Bellatoria",
    owner: "Bernatello's Foods",
    ownershipType: "Family owned",
    additionalNotes: "Owned by Ramsay Family"
  },
  {
    category: "Frozen Pizza",
    brand: "Roma",
    owner: "Bernatello's Foods",
    ownershipType: "Family owned",
    additionalNotes: "Owned by Ramsay Family"
  },
  {
    category: "Frozen Pizza",
    brand: "Wild Mikes",
    owner: "Piazza family",
    ownershipType: "Family owned",
    additionalNotes: "Has a children's charity foundation similar to Newman's Own"
  },
  {
    category: "Frozen Pizza",
    brand: "Screamin Sicillian",
    owner: "Fallucca Family",
    ownershipType: "Family owned",
    additionalNotes: "Gives a darn about mustaches"
  },
  {
    category: "Frozen Pizza",
    brand: "Caulipower",
    owner: "Gail Becker",
    ownershipType: "Founder owned",
    additionalNotes: "Gail has two sons with celiac disease"
  },
  {
    category: "Frozen Pizza",
    brand: "Newman's Own",
    owner: "The Newman's Own Foundation",
    ownershipType: "Private Non-Profit",
    additionalNotes: "100% of profits to charity"
  },
  {
    category: "Ice Cream",
    brand: "Tillamook",
    owner: "Farmers Co-op",
    ownershipType: "Co-op"
  },
  {
    category: "Ice Cream",
    brand: "Umpqua",
    owner: "Feldkamp family",
    ownershipType: "Family owned"
  },
  {
    category: "Juice",
    brand: "Ocean Spray",
    owner: "Co-op",
    ownershipType: "Farmer's Co-op"
  },
  {
    category: "Juice",
    brand: "Welch's",
    owner: "Co-op",
    ownershipType: "Farmer's Co-op"
  },
  {
    category: "Juice",
    brand: "Sunkist",
    owner: "Co-op",
    ownershipType: "Farmer's Co-op"
  },
  {
    category: "Juice",
    brand: "Tree Top",
    owner: "Co-op",
    ownershipType: "Farmer's Co-op"
  },
  {
    category: "Juice",
    brand: "Martinelli's",
    owner: "Marinelli family",
    ownershipType: "Family owned"
  },
  {
    category: "Juice",
    brand: "Langer's",
    owner: "Langer family",
    ownershipType: "Family owned"
  },
  {
    category: "Pasta Sauce",
    brand: "Organicville",
    owner: "Employee Owned",
    ownershipType: "Employee Owned"
  },
  {
    category: "Pasta Sauce",
    brand: "Mezzetta",
    owner: "Jeff Mezzetta & Family",
    ownershipType: "Family Owned",
    additionalNotes: "Fourth generation family owned"
  },
  {
    category: "Pasta Sauce",
    brand: "Newman's Own",
    owner: "The Newman's Own Foundation",
    ownershipType: "Private Non-Profit",
    additionalNotes: "100% of profits to charity"
  },
  {
    category: "Pickles",
    brand: "Mezzetta",
    owner: "Mezzetta Family",
    ownershipType: "Family owned",
    additionalNotes: "4th generation family owned"
  },
  {
    category: "Pickles",
    brand: "Napoleon",
    owner: "Magnano Family",
    ownershipType: "Family owned",
    additionalNotes: "Fourth generation family owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Organicville",
    owner: "Litehouse Inc",
    ownershipType: "Employee owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Portlandia Foods",
    owner: "Jeff Bergadine & Michael Deal",
    ownershipType: "Founder owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Tabasco",
    owner: "",
    ownershipType: "Family owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Beaver mustard",
    owner: "Beaverton Foods",
    ownershipType: "Family owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Sweet Baby Ray's",
    owner: "Ken's Foods",
    ownershipType: "Family owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Sriracha",
    owner: "Huy Fong Foods",
    ownershipType: "Family owned",
    additionalNotes: "Tran family owned. Cool origin story"
  },
  {
    category: "Sauces & Dressings",
    brand: "Ken's dressing",
    owner: "Crowley & Hannah families",
    ownershipType: "Family owned"
  },
  {
    category: "Sauces & Dressings",
    brand: "Newman's Own",
    owner: "Newman family",
    ownershipType: "Family owned"
  },
  {
    category: "Feminine Hygeine",
    brand: "Natracare",
    owner: "Susie Hewson",
    ownershipType: "Female Founder Owned",
    additionalNotes: "Since 1989! the GOAT"
  },
  {
    category: "Feminine Hygeine",
    brand: "Cora",
    owner: "Molly Haward",
    ownershipType: "Female Founder Owned"
  },
  {
    category: "Feminine Hygeine",
    brand: "August",
    owner: "Nadya Okamoto & Nick Jain",
    ownershipType: "Founder Owned"
  },
  {
    category: "Feminine Hygeine",
    brand: "The Honey Pot Company",
    owner: "Beatrice Dixon",
    ownershipType: "Female Founder and Family Owned",
    additionalNotes: "There was controversy over an ingredient change. The company was not sold or taken over"
  },
  {
    category: "Feminine Hygeine",
    brand: "Rael",
    owner: "",
    ownershipType: "Female Founder Owned",
    additionalNotes: "Three Kool Korean-American ladies. Legit"
  },
  {
    category: "Feminine Hygeine",
    brand: "Lola",
    owner: "Alex Friedman & Jordana Kier",
    ownershipType: "Female Founder Owned"
  },
  {
    category: "Feminine Hygeine",
    brand: "The FLEX Company",
    owner: "Lauren Scholte Wang",
    ownershipType: "Female Founder Owned",
    additionalNotes: "Disks, cups, etc"
  },
  {
    category: "Deoderant",
    brand: "Clean Age",
    owner: "Rachel Peters",
    ownershipType: "Female Founder Owned",
    additionalNotes: "Founded by Rachel Peters- kinda cookie cutter website"
  },
  {
    category: "Deoderant",
    brand: "Life Doesn't Stink (Stinkbug Naturals)",
    owner: "Ben & Jade Bower",
    ownershipType: "Founder Owned"
  },
  {
    category: "Deoderant",
    brand: "Humble",
    owner: "Jeff Shardell",
    ownershipType: "Founder Owned",
    additionalNotes: "Jeff Shardell- super transparent on website, super natural"
  },
  {
    category: "Deoderant",
    brand: "Raw Sugar",
    owner: "Donda Mullis & Ronnie Shugar",
    ownershipType: "Founder Family Owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Fairy Tales Haircare",
    owner: "Risa Barash",
    ownershipType: "Female founder owned",
    additionalNotes: "Have sponsored this channel and are awesome! Highly recommended for kids and adults"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Raw Sugar",
    owner: "Ronnie Shugar & Donda Mullis",
    ownershipType: "Founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Mane 'n Tail",
    owner: "Katzev family",
    ownershipType: "Family owned",
    additionalNotes: "Have a hillarious TikTok account- great for animals and for humans"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Saltair",
    owner: "Iskra Laurence",
    ownershipType: "Influencer founder owned",
    additionalNotes: "PE backed"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Odele",
    owner: "Shannon, Britta, Lindsay",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Urban Hydration",
    owner: "Psyche Terry",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Pacifica",
    owner: "Brook Harvey Taylor and husband",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Not your mothers",
    owner: "Bethany and Rocky Pagliarulo",
    ownershipType: "Founder family owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "John Freida",
    owner: "John Freida",
    ownershipType: "Founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "It's a 10",
    owner: "Carolyn Aronson",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Function of beauty",
    owner: "Zahir Dossa",
    ownershipType: "Founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Aquis",
    owner: "Britta Cox and Suveen Sahib",
    ownershipType: "Female founder owned and her husband"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Clima plex",
    owner: "Simon Ostler",
    ownershipType: "Founder owned I think"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Miss Jessie's",
    owner: "Miko Branch",
    ownershipType: "Female founder owned",
    additionalNotes: "Bad Ass. RIP to Titi <3"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Camille Rose",
    owner: "Janelle Evans",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "As I am",
    owner: "Dr. Ali Syed",
    ownershipType: "Founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Rizos curls",
    owner: "Julissa Prado",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Curls",
    owner: "Mahisha Dellinger",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "TGIN",
    owner: "Chris-Tia Donaldson",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Uncle Funky's Daughter",
    owner: "Renee Morris",
    ownershipType: "Female bought and owned!",
    additionalNotes: "Homegirl literally just bought the company outright with her own pocket money"
  },
  {
    category: "Haircare/Shampoo",
    brand: "Kinky Curly",
    owner: "Shelley Davis",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "TPH",
    owner: "Taraji P Henson",
    ownershipType: "Female founder owned"
  },
  {
    category: "Haircare/Shampoo",
    brand: "The Doux",
    owner: "Maya Smith",
    ownershipType: "Female founder owned"
  },
  {
    category: "Skincare",
    brand: "Mad Rabbit",
    owner: "Oliver Zak & Selom Agbitor",
    ownershipType: "Founder owned",
    additionalNotes: "Tattoo specific natural skincare, but lots of great products for general skin wellness"
  },
  {
    category: "Skincare",
    brand: "Luxe Beauty",
    owner: "Jane May Graves",
    ownershipType: "Female Founder Owned",
    additionalNotes: "Jane is a chemist and a certified bad ass. One of the highest integrity companies for natural, non-toxic ingredients"
  },
  {
    category: "Skincare",
    brand: "Eczema Honey",
    owner: "Minesh Patel",
    ownershipType: "Founder owned"
  },
  {
    category: "Skincare",
    brand: "Mother's Shea",
    owner: "Eugenia Akuete",
    ownershipType: "Founder owned"
  },
  {
    category: "Skincare",
    brand: "Dr. Bronner's",
    owner: "Bronner's family",
    ownershipType: "Family owned",
    additionalNotes: "Checkout the wikipedia page for a fun read"
  },
  {
    category: "Skincare",
    brand: "Organic By Nature",
    owner: "David Sandoval",
    ownershipType: "Founder owned",
    additionalNotes: "Not to be confused with the copious other similarly named brands"
  },
  {
    category: "Skincare",
    brand: "Rael",
    owner: "",
    ownershipType: "Female Founder Owned",
    additionalNotes: "Three Kool Korean-American ladies. Legit"
  },
  {
    category: "Skincare",
    brand: "Egyptian Magic",
    owner: "LordPharaoh ImHotepAmonRa",
    ownershipType: "Founder owned",
    additionalNotes: "This is not a joke... this is for real"
  },
  {
    category: "Skincare",
    brand: "Aztec Secret",
    owner: "Patrick K Roman",
    ownershipType: "Founder owned"
  },
  {
    category: "Skincare",
    brand: "Nad's",
    owner: "Sue Ismiel",
    ownershipType: "Founder owned"
  },
  {
    category: "Skincare",
    brand: "Dr. Squatch",
    owner: "Jack Haldrup",
    ownershipType: "Founder owned"
  },
  {
    category: "Skincare",
    brand: "Would",
    owner: "David Portnoy",
    ownershipType: "Founder owned",
    additionalNotes: "This one's weird. Would is owned by Barstool Brands, sold to Penn entertainment, then back to Portnoy as of 2023"
  },
  {
    category: "Skincare",
    brand: "Duke Cannon",
    owner: "Main Post Partners",
    ownershipType: "Private Equity"
  },
  {
    category: "Skincare",
    brand: "Freshwater",
    owner: "Hutcherson Family",
    ownershipType: "Family owned",
    additionalNotes: "Based in Australia"
  },
  {
    category: "Skincare",
    brand: "Best Damn",
    owner: "Main Post Partners",
    ownershipType: "Private Equity",
    additionalNotes: "This is just a Duke Cannon brand"
  },
  {
    category: "Skincare",
    brand: "Off Court",
    owner: "Bani Bahari & Jonathan Lawrence",
    ownershipType: "Family owned",
    additionalNotes: "Founders are married. Company is minority owned and backed by private equity Cartograph Ventures and Intonation Ventures"
  },
  {
    category: "Baby Products",
    brand: "Oilogic",
    owner: "Jordan Morrow & Worth Anne Herrell",
    ownershipType: "Female founder owned"
  },
  {
    category: "Baby Products",
    brand: "Raz Baby",
    owner: "Aida and Lidia",
    ownershipType: "Female founder owned",
    additionalNotes: "Sisters founded in 2002"
  },
  {
    category: "Toothpaste",
    brand: "Twice Oral Wellness",
    owner: "Lenny Kravitz & Julian & Cody Levine",
    ownershipType: "Founder owned"
  },
  {
    category: "Toothpaste",
    brand: "Akamai Basics Toothpowder",
    owner: "Vincent Cobb & Marni Shymkus",
    ownershipType: "Founder owned"
  },
  {
    category: "Paper Products",
    brand: "Who Gives a Crap",
    owner: "Simon Griffiths, Danny Alexander, and Jehan Ratnatunga",
    ownershipType: "Founder owned"
  },
  {
    category: "Preworkout & Supplements",
    brand: "Kaged",
    owner: "Michael McClane",
    ownershipType: "Founder owned",
    additionalNotes: "One of the founders left on this message in 2023. Some controversy, ownership structure change unclear"
  },
  {
    category: "Preworkout & Supplements",
    brand: "Jym",
    owner: "Jim Stoppani",
    ownershipType: "Founder owned",
    additionalNotes: "Dude is a Dr. and is yoked, and has A+ mission statements"
  },
  {
    category: "Preworkout & Supplements",
    brand: "Bucked Up",
    owner: "Jeff & Ryan Gardner",
    ownershipType: "Founder family owned",
    additionalNotes: "Founded by twin brothers. These guys are social media marketers, not nutritionists, but hey. They're not the CCP"
  },
  {
    category: "Preworkout & Supplements",
    brand: "Glaxon",
    owner: "Michael Bischoff Jr.",
    ownershipType: "Founder owned",
    additionalNotes: "Partnered with GNC for distribution, does not appear to affect ownership"
  },
  {
    category: "Preworkout & Supplements",
    brand: "G Fuel",
    owner: "Clifford Morgan",
    ownershipType: "Founder owned",
    additionalNotes: "Some controversy worth looking into. This brand was targetting e-sports from the start, not athletics"
  },
  {
    category: "Preworkout & Supplements",
    brand: "Podium",
    owner: "Mat Fraser, Heber Cannon and Marston Sawyers (aka the Buttery Bros), Paul Haverland",
    ownershipType: "Founder owned",
    additionalNotes: "Mat Fraser is an effing legend, whether you love or hate crossfit, I dare you to hate Mat. This company was founded out of crossfit- with crossfit style training in min"
  }
];

interface ContentGridProps {
  initialCategory?: string;
}

const ContentGrid = ({ initialCategory = "all" }: ContentGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  // Update selected category when initialCategory prop changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = ["all", ...new Set(data.map(item => item.category))].sort();
  
  const filteredData = data.filter(item => {
    const matchesSearch = 
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ownershipType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.additionalNotes || "").toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 p-6">
        <Input
          type="search"
          placeholder="Search brands, owners, or ownership types..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="max-w-xs p-2 rounded-md border border-input bg-background"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredData.map((item, index) => (
          <ContentCard
            key={`${item.category}-${item.brand}-${index}`}
            brand={item.brand}
            owner={item.owner}
            ownershipType={item.ownershipType}
            additionalNotes={item.additionalNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentGrid;
