---
title: "Contact"
---

<script setup>
  import resume from "../resume.json"
  import UserProfile from '../components/user-profile.vue'
</script>

<UserProfile :name="resume.basics.name" imageUrl="headshot.jpg"/>
