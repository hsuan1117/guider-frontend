<script setup>
import JetAuthenticationCard from '../components/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '../components/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '../components/Jetstream/Button.vue';
import JetInput from '../components/Jetstream/Input.vue';
import JetCheckbox from '../components/Jetstream/Checkbox.vue';
import JetLabel from '../components/Jetstream/Label.vue';
import JetValidationErrors from '../components/Jetstream/ValidationErrors.vue';
import Header from "../components/Header";

const form = {
	email: "",
	password: "",
	remember: false,
	processing: false
}

const submit = () => {
	/*form.transform(data => ({
		...data,
		remember: form.remember ? 'on' : '',
	})).post(route('login'), {
		onFinish: () => form.reset('password'),
	});*/
};
</script>

<template>
	<div class="min-h-screen flex flex-col">
		<Header/>
		<JetAuthenticationCard>
			<template #logo>
				<JetAuthenticationCardLogo/>
			</template>

			<div class="text-2xl font-bold w-full text-center">
				引路人登入
			</div>

			<form @submit.prevent="submit">
				<div>
					<JetLabel for="email" value="電子郵件"/>
					<JetInput
						id="email"
						v-model="form.email"
						type="email"
						class="mt-1 block w-full"
						required
						autofocus
					/>
				</div>

				<div class="mt-4">
					<JetLabel for="password" value="密碼"/>
					<JetInput
						id="password"
						v-model="form.password"
						type="password"
						class="mt-1 block w-full"
						required
						autocomplete="current-password"
					/>
				</div>

				<div class="block mt-4">
					<label class="flex items-center">
						<JetCheckbox v-model:checked="form.remember" name="remember"/>
						<span class="ml-2 text-sm text-gray-600">記住我</span>
					</label>
				</div>

				<div class="flex items-center justify-end mt-4">
					<JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
						登入
					</JetButton>
				</div>
			</form>
		</JetAuthenticationCard>
	</div>
</template>
