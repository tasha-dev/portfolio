// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client"

// Importing part
import {ReactNode} from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/component/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/component/ui/form";
import {Input} from "@/component/ui/input";
import {Card, CardContent, CardHeader} from "@/component/ui/card";
import {Textarea} from "@/component/ui/textarea";
import {toast} from "sonner";
import {LoaderCircle} from "lucide-react";
import PageLayout from "@/component/pageLayout";

// Defining formSchema
const formSchema = z.object({
    name: z
        .string()
        .min(2, {message: "Name must be at least 2 characters.",})
        .max(20, {message: "Name can be 20 characters at most.",}),
    email: z
        .string()
        .email({message: "Please enter a valid email address.",}),
    message: z
        .string()
        .min(20, {message: "Message must be at least 20 characters.",})
})

// Creating and exporting contact page as default
export default function ContactPage():ReactNode {
    // Defining useForm hook
    const form = useForm<z.infer<typeof formSchema>>({resolver: zodResolver(formSchema),})

    // Defining a function to handle submit event of form
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // A function to handle error response of fetch
        function handleError():void {
            toast.error('There was an error while sending your info.', {
                description: "Please try again later :))"
            })
        }

        // Fetching the data to send email to me
        await fetch("https://formspree.io/f/xanwgdnq", {
            method: "POST",
            headers: {'Accept': 'application/json'},
            body: JSON.stringify({
                Email: values.email,
                Name: values.name,
                Message: values.message
            }),
        })
            .then((data) => data.json())
            .then((data) => {
                if (data.ok) {
                    toast.success('Thank You for Reaching Out!', {
                        description: "Your message has been successfully sent. I'll get back to you as soon as possible, typically within 24-48 hours."
                    })
                } else {
                    handleError();
                }
            })
            .catch(() => handleError())
    }

    // Returning JSX
    return (
        <>
            <section className={'w-full h-[500px] lg:p-[50px] p-[25px] lg:rounded-[12px] rounded-[10px] bg-[url("../image/walpaperPrefrence.jpg")] bg-cover flex items-end justify-start'}>
                <main>
                    <h1 className={'text-white'}>Hi, Im Mahdi Tasha</h1>
                    <p className={'text-white'}>A skilled front-end developer based in Tehran, specializing in creating high-performance, responsive web applications. I focus on delivering seamless user experiences with clean, efficient code, tailored to meet both business goals and user needs.</p>
                </main>
            </section>
            <Card>
                <CardHeader>
                    <h1>Let's Get in Touch.</h1>
                    <p>Feel free to reach out for collaborations or inquiries.</p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl><Input placeholder="Your Email" {...field} /></FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl><Textarea placeholder="Your Message" {...field} /></FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className={'w-full'} disabled={(form.formState.isSubmitting)}>
                                {
                                    (form.formState.isSubmitting)
                                        ? <LoaderCircle className={'w-4 h-4 animate-spin'} />
                                        : 'Submit'
                                }
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}
